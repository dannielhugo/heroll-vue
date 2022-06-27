const mockFirebase = {
  signInWithPopup: vi.fn(),
  GoogleAuthProvider: class GoogleAuthProvider {
    static credentialFromResult() {
      return {
        accessToken: 'act',
      };
    };
  },
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn(),
  getAuth: vi.fn().mockReturnValue({
    currentUser: {
      displayName: 'name',
      email: 'email@email.com',
      uid: 'uid',
    }
  }),
}

import { getUser, login, logout, registerAuthStateChanged } from '../auth.service';

vi.stubGlobal('console', {
  log: vi.fn(),
  warn: vi.fn(),
});

vi.mock('/firestore.service', () => {});
vi.mock('firebase/auth', () => mockFirebase);


const signInResult = {
  user: {
    displayName: 'name',
    email: 'email@email.com',
    uid: 'uid',
  }
}

describe('AuthService', () => {
  describe('login', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    test('should return an authenticated user', async () => {
      mockFirebase.signInWithPopup.mockResolvedValue(signInResult);

      const user = await login();
      expect(user).toEqual({
        name: 'name',
        email: 'email@email.com',
        id: 'uid',
        accessToken: 'act',
      });
    });

    test('should throw an error', async () => {
      mockFirebase.signInWithPopup.mockRejectedValue(new Error('error'));

      try {
        await login();
        throw new Error('shall not pass');
      } catch (error: any) {
        expect(error.message).toBe('error');
      }
    });
  });

  describe('logout', () => {
    test('should call signOut', async () => {
      await logout();
      expect(mockFirebase.signOut).toHaveBeenCalled();
    });
  });

  describe('getUser', () => {
    test('should return currentUser', async () => {
      const user = await getUser();
      expect(user).toEqual({
        name: 'name',
        email: 'email@email.com',
        id: 'uid',
      });
    });
  });

  describe('registerAuthStateChanged', () => {
    test('should return currentUser', () => {
      const loaded = vi.fn();
      const notLoaded = vi.fn();
      mockFirebase.onAuthStateChanged.mockImplementation((_, next) => {
        next(signInResult.user);
      });

      registerAuthStateChanged(loaded, notLoaded);
      
      expect(loaded).toHaveBeenCalledWith({
        name: 'name',
        email: 'email@email.com',
        id: 'uid',
      });
    });

    test('should not return user', () => {
      const loaded = vi.fn();
      const notLoaded = vi.fn();
      mockFirebase.onAuthStateChanged.mockImplementation((_, next) => {
        next();
      });

      registerAuthStateChanged(loaded, notLoaded);

      expect(notLoaded).toHaveBeenCalled();
    });
  });
});
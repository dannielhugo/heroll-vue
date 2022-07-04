import type { User } from '@/models/user';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { Factory } from './factory.service';

export class AuthService {
  async login(): Promise<User> {
    const { auth, provider } = Factory.firestoreService();

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;

      const appUser = {
        name: user.displayName || '',
        email: user.email || '',
        id: user.uid,
        accessToken: token || '',
      };

      return appUser;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    const { auth } = Factory.firestoreService();
    return signOut(auth);
  }

  getUser(): Promise<User> {
    const { auth } = Factory.firestoreService();
    return new Promise<User>((resolve, reject) => {
      const user = auth.currentUser;

      if (user) {
        resolve({
          name: user.displayName || '',
          email: user.email || '',
          id: user.uid,
        });
      } else {
        reject(new Error('user is not logged in'));
      }
    });
  }

  registerAuthStateChanged(
    onLoaded: (user: User) => void,
    onNotLoaded: () => void,
  ): void {
    const { auth } = Factory.firestoreService();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onLoaded({
          name: user.displayName || '',
          email: user.email || '',
          id: user.uid,
        });
      } else {
        onNotLoaded();
      }
    });
  }
}

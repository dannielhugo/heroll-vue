import type { User } from '@/models/user';
import { auth, provider } from './firestore.service';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

export async function login(): Promise<User> {
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

export async function logout(): Promise<void> {
  return signOut(auth);
}

export function getUser(): Promise<User> {
  
  return new Promise<User>((resolve, reject) => {
    const user = auth.currentUser;

    if (user) {
      resolve({
        name: user.displayName || '',
        email: user.email || '',
        id: user.uid,
      })
    } else {
      reject(new Error('user is not logged in'))
    }
  });
}


export function registerAuthStateChanged(onLoaded: (user: User) => void, onNotLoaded: () => void): void {
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

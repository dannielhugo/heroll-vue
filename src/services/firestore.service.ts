import { Config } from '@/config/config';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = Config.firebase;

console.log(firebaseConfig);

// init firebase
initializeApp(firebaseConfig);

export function firestoreService() {
  // init & export firestore service
  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  return { db, auth, provider };
}

import { Config } from '@/config/config';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = Config.firebase;

// init firebase
initializeApp(firebaseConfig);

// init & export firestore service
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
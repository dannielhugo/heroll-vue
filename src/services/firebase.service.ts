import type { Serializable } from '@/models/serializable';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firestoreService } from './firestore.service';

const { db } = firestoreService();

export class FirebaseService {
  async create<T extends Serializable>(
    data: T,
    collectionName: string,
  ): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log('Document written with ID: ', docRef.id);
      return docRef.id;
    } catch (e) {
      console.error('Error adding document: ', e);
      throw e;
    }
  }

  async add<T extends Serializable>(
    data: T,
    collectionName: string,
    id: string,
  ): Promise<void> {
    try {
      await setDoc(doc(db, collectionName, id), data);
    } catch (e) {
      console.error('Error adding document: ', e);
      throw e;
    }
  }

  async getAll<T extends Serializable>(
    collectionName: string,
  ): Promise<T | null> {
    const docRef = doc(db, collectionName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data() as T;
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return null;
    }
  }

  async getById<T extends Serializable>(
    collectionName: string,
    id: string,
  ): Promise<T | null> {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data() as T;
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return null;
    }
  }

  async update<T extends Serializable>(
    data: T,
    collectionName: string,
  ): Promise<void> {
    const document = doc(db, collectionName, data.id);

    await updateDoc(document, data);
  }

  async addDocToArray<T>(
    collectionName: string,
    elementId: string,
    arrayElement: T,
    field: string,
  ): Promise<void> {
    const document = doc(db, collectionName, elementId);
    await updateDoc(document, {
      [field]: arrayUnion(arrayElement),
    });
  }

  async addDocsToArray<T>(
    collectionName: string,
    elementId: string,
    arrayElements: T[],
    field: string,
  ): Promise<void> {
    const document = doc(db, collectionName, elementId);
    await updateDoc(document, {
      [field]: arrayUnion(...arrayElements),
    });
  }

  async removeDocFromArray<T>(
    collectionName: string,
    elementId: string,
    arrayElement: T,
    field: string,
  ): Promise<void> {
    const document = doc(db, collectionName, elementId);
    await updateDoc(document, {
      [field]: arrayRemove(arrayElement),
    });
  }
}

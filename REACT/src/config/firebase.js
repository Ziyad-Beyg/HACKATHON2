import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  sendEmailVerification,
  updatePassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  addDoc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteField,
  increment,
} from 'firebase/firestore';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyArXIAX9KllEYmgkEqnRo9uzU_YafA1Qho',
  authDomain: 'khaana-sab-k-liye.firebaseapp.com',
  projectId: 'khaana-sab-k-liye',
  storageBucket: 'khaana-sab-k-liye.appspot.com',
  messagingSenderId: '370466219040',
  appId: '1:370466219040:web:ab6c035f817902f4274845',
  measurementId: 'G-ZE5PXQ5X52',
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  sendEmailVerification,
  updatePassword,
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteField,
  increment,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
};

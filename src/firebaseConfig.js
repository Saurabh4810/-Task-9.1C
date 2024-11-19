import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnjebMpNGCYYbFZTgTvHqpVr7dmyuBSX0",
  authDomain: "c-frontend-258ef.firebaseapp.com",
  projectId: "c-frontend-258ef",
  storageBucket: "c-frontend-258ef.firebasestorage.app",
  messagingSenderId: "302055801960",
  appId: "1:302055801960:web:8774def771371c76b6e7dd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
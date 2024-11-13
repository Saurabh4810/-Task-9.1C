import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8jjAPKq_M9aqZLGyouudXvoVnfjTYWEU",
  authDomain: "development-7-2p.firebaseapp.com",
  databaseURL: "https://development-7-2p-default-rtdb.firebaseio.com",
  projectId: "development-7-2p",
  storageBucket: "development-7-2p.appspot.com",
  messagingSenderId: "733264491961",
  appId: "1:733264491961:web:e0d15e32ba422b52d8b268",
  measurementId: "G-ZHWZVHTHKJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
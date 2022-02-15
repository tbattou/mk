import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDW5jlXS1KaXBjU1gKKHpCgzsrl1DzK1sk",
  authDomain: "mk-react.firebaseapp.com",
  projectId: "mk-react",
  storageBucket: "mk-react.appspot.com",
  messagingSenderId: "838624362521",
  appId: "1:838624362521:web:44caa8ee3f967ae36e6a88"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
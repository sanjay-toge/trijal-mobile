// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBPV8i7R4Y7pohu6exMDbUyY27oZnlo4e4",
  authDomain: "trijal-f4c90.firebaseapp.com",
  projectId: "trijal-f4c90",
  storageBucket: "trijal-f4c90.firebasestorage.app",
  messagingSenderId: "285628193144",
  appId: "1:285628193144:web:8b1140e07e1d754356108d",
  measurementId: "G-1T10NQQ1B8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

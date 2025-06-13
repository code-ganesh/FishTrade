// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDH8rwt2MCix2EBBVrukkgL-vr3jJrZ7_Q",
  authDomain: "aquatrade-1cd7e.firebaseapp.com",
  projectId: "aquatrade-1cd7e",
  storageBucket: "aquatrade-1cd7e.appspot.com",
  messagingSenderId: "533813850767",
  appId: "1:533813850767:web:82f7fcc7269baeebf436fa",
  measurementId: "G-H2SE7ZE42D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

signInAnonymously(auth).catch(error => {
  console.error("Anonymous sign-in error:", error);
});

export { db, auth };

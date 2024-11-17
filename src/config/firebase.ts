import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDR1fZ4TpXtDG0sDXTLM7gXgM_kJGGxvJk",
  authDomain: "pulse-tap.firebaseapp.com",
  projectId: "pulse-tap",
  storageBucket: "pulse-tap.appspot.com",
  messagingSenderId: "485824546138",
  appId: "1:485824546138:web:8b9b9b9b9b9b9b9b9b9b9b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
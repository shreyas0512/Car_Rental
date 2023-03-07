import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_W7qC5Rj3nf4qAUAHrPgFO3pxIhQM3cw",
  authDomain: "shn23-3935b.firebaseapp.com",
  projectId: "shn23-3935b",
  storageBucket: "shn23-3935b.appspot.com",
  messagingSenderId: "137216160967",
  appId: "1:137216160967:web:250f3f9999fa583b497ae2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

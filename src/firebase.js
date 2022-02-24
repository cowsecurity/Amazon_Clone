import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "FIREBASE CONFIG",
  authDomain: "FIREBASE CONFIG",
  projectId: "FIREBASE CONFIG",
  storageBucket: "FIREBASE CONFIG",
  messagingSenderId: "FIREBASE CONFIG",
  appId: "FIREBASE CONFIG",
  measurementId: "FIREBASE CONFIG",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIc5CdXeJ3mvlRePYuL6ocJVgNWAB1BmE",
  authDomain: "clone-a79e5.firebaseapp.com",
  projectId: "clone-a79e5",
  storageBucket: "clone-a79e5.appspot.com",
  messagingSenderId: "657472495871",
  appId: "1:657472495871:web:f0b7983671d65df7ff2cca",
  measurementId: "G-SN6DSN6TJK",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoFCaLQRYi2pYgrsSzYnSWk-O5JXiMEQU",
  authDomain: "gkit-twitter.firebaseapp.com",
  projectId: "gkit-twitter",
  storageBucket: "gkit-twitter.appspot.com",
  messagingSenderId: "67103886907",
  appId: "1:67103886907:web:47ae24f9ebb9e7f29d561e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

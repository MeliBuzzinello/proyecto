// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFXTf3Dg_vbYoJgxLbxFBnKTdCaKCnxwM",
  authDomain: "buzzinellonext.firebaseapp.com",
  projectId: "buzzinellonext",
  storageBucket: "buzzinellonext.appspot.com",
  messagingSenderId: "891360736742",
  appId: "1:891360736742:web:c596a6a7d11abce9afd227",
//   measurementId: "G-H374FJ3YWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
export const storage = getStorage(app);
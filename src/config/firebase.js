// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{getFirestore} from "firebase/firestore"

import {getAuth,GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrKUTbJmxDDIlxPJY1q536l1_VKAa1Z3s",
  authDomain: "react-firebase-5e627.firebaseapp.com",
  projectId: "react-firebase-5e627",
  storageBucket: "react-firebase-5e627.appspot.com",
  messagingSenderId: "359079708589",
  appId: "1:359079708589:web:808e4230ed36c99eea8324",
  measurementId: "G-D3JS7RMS0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider();

export const  db=getFirestore(app)
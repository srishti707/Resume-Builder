// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEQbObnjAD525r31w8KAWrZ8YhkKs7uyE",
  authDomain: "resumebuilder-ea78f.firebaseapp.com",
  projectId: "resumebuilder-ea78f",
  storageBucket: "resumebuilder-ea78f.appspot.com",
  messagingSenderId: "982340674855",
  appId: "1:982340674855:web:906d1a995148a691b2b502",
  measurementId: "G-FJVC3B6RRN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
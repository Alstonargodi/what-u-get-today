// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmFVy3oHekn6ezKgAFC-eZ5v2ApIUjUn4",
  authDomain: "crudtest-7b7cd.firebaseapp.com",
  databaseURL: "https://crudtest-7b7cd-default-rtdb.firebaseio.com",
  projectId: "crudtest-7b7cd",
  storageBucket: "crudtest-7b7cd.appspot.com",
  messagingSenderId: "245467831652",
  appId: "1:245467831652:web:f92a697f1cf2d2f89dee71",
  measurementId: "G-HDL66YM6KS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
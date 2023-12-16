// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC0s4NiXSgf4F_M0z-aJDuvS9tocPUbA4w",
  authDomain: "contextpractice-17a9b.firebaseapp.com",
  projectId: "contextpractice-17a9b",
  storageBucket: "contextpractice-17a9b.appspot.com",
  messagingSenderId: "858590923646",
  appId: "1:858590923646:web:c28d2dca2adeb92ddb012f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

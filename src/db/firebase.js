// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOXPJv50qfZSPe3-W_noes8tkFr4RpAQ8",
  authDomain: "recipe-finder-1d6e3.firebaseapp.com",
  projectId: "recipe-finder-1d6e3",
  storageBucket: "recipe-finder-1d6e3.firebasestorage.app",
  messagingSenderId: "845745185788",
  appId: "1:845745185788:web:e0cc140a885fe842a44879",
  measurementId: "G-Z6CVP2PRWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
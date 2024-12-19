// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLClZ4bdnZkK4lY4wxkhYfmrXpB42i16U",
  authDomain: "recipehunt-24396.firebaseapp.com",
  projectId: "recipehunt-24396",
  storageBucket: "recipehunt-24396.firebasestorage.app",
  messagingSenderId: "999966304844",
  appId: "1:999966304844:web:effd790677adc97579a2e9",
  measurementId: "G-SCL1LLW939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
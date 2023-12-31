// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0BUCHUiT9jgUt4MGGr5V_P7A2jY6bwoc",
  authDomain: "netflix-clone-d2cd0.firebaseapp.com",
  projectId: "netflix-clone-d2cd0",
  storageBucket: "netflix-clone-d2cd0.appspot.com",
  messagingSenderId: "585429077375",
  appId: "1:585429077375:web:c2998981f6a4413f38de4a",
  measurementId: "G-729C84Y2HJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

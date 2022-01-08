// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1AAxzIgSZn4D7mT5Q97Vyi0f6uzBHQ0M",
  authDomain: "lab-ferrari-lpereira.firebaseapp.com",
  projectId: "lab-ferrari-lpereira",
  storageBucket: "lab-ferrari-lpereira.appspot.com",
  messagingSenderId: "531288744012",
  appId: "1:531288744012:web:b1609ebd01f7e106be94e9",
  measurementId: "G-4LCY4HP9EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
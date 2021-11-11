// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7FTwP542YkYpEfKBk_qLyfwUaO18I9Bo",
  authDomain: "tftp-final.firebaseapp.com",
  projectId: "tftp-final",
  storageBucket: "tftp-final.appspot.com",
  messagingSenderId: "479431590466",
  appId: "1:479431590466:web:643eba2d45235921c523db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db }
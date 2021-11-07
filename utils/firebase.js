import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0V6ZSYtrmIEo2zJ4Lc9dHPaHTUUkyF7c",
    authDomain: "tftp-lwazin.firebaseapp.com",
    projectId: "tftp-lwazin",
    storageBucket: "tftp-lwazin.appspot.com",
    messagingSenderId: "186762373912",
    appId: "1:186762373912:web:7fd3ede4ed960268cf0c6d"  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { addDoc, db, collection };

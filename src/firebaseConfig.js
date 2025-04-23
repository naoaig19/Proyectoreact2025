// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Firestore
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeS7UIOqnULnBkq6ucuTnC7D1Po-vJ4Dg",
    authDomain: "brene-tienda.firebaseapp.com",
    projectId: "brene-tienda",
    storageBucket: "brene-tienda.firebasestorage.app",
    messagingSenderId: "1000804054842",
    appId: "1:1000804054842:web:31a3c4324bc0c40ca74203",
    measurementId: "G-KS9F82QFR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };  // Export Firestore database

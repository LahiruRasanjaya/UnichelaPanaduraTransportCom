// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDUAWnJHkLOFXrAcs5NRQOAQNttmnTaeQg",

  authDomain: "transportcomplain-e9032.firebaseapp.com",

  projectId: "transportcomplain-e9032",

  storageBucket: "transportcomplain-e9032.firebasestorage.app",

  messagingSenderId: "991824850087",

  appId: "1:991824850087:web:eb42b2753d4e1ac4b6ff82",

  measurementId: "G-JFZ7KFR9EL"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export {db,collection, addDoc}
// const analytics = getAnalytics(app);
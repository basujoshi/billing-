// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb17q096my1Tddl7kYP9N5VXFHxC11wHA",
  authDomain: "billing-bd.firebaseapp.com",
  databaseURL: "https://billing-bd-default-rtdb.firebaseio.com",
  projectId: "billing-bd",
  storageBucket: "billing-bd.firebasestorage.app",
  messagingSenderId: "426702662740",
  appId: "1:426702662740:web:748ec69388403d356e11c1",
  measurementId: "G-L08QJMLMEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

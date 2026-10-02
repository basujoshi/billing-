// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDb17q096myTddl7kYP9N5VXFHxC11wHA",
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

// Initialize Realtime Database
const db = getDatabase(app);

export { app, db };

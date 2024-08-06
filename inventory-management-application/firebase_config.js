// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-uxs2GY8g7VAwTKpkvoDOO0KyvFz-uUI",
  authDomain: "inventory-management-app-10cf4.firebaseapp.com",
  projectId: "inventory-management-app-10cf4",
  storageBucket: "inventory-management-app-10cf4.appspot.com",
  messagingSenderId: "309593776882",
  appId: "1:309593776882:web:fb4ea9112a37aa8388e66b",
  measurementId: "G-GQ7YTFYKCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
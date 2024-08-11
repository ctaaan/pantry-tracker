// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR7ZIubEbseWhSO10A97k_VmGdFRIyses",
  authDomain: "inventory-management-fc510.firebaseapp.com",
  projectId: "inventory-management-fc510",
  storageBucket: "inventory-management-fc510.appspot.com",
  messagingSenderId: "1010367314196",
  appId: "1:1010367314196:web:65cf7e92e3bb024fd9ea01",
  measurementId: "G-JC6M2K70KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 

export {firestore};
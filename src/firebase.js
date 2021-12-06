// Firebase file where we init firebase and connect it from  the firbase database

// Firebase related imports
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXPRp_wADo9Lsp0fqXkLfNtwUW53xF65A",
  authDomain: "stuck-9904e.firebaseapp.com",
  projectId: "stuck-9904e",
  storageBucket: "stuck-9904e.appspot.com",
  messagingSenderId: "1009304981923",
  appId: "1:1009304981923:web:36d541a3e56a427e1fca16",
  measurementId: "G-V7E4TFB68V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// Google authentication provider from firebase
const provider = new firebase.auth.GoogleAuthProvider();
// Storage to use the cloud storage of firebase
const storage = firebase.storage;

export { auth, provider, storage };
export default db;

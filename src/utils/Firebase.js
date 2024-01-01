import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"

const app = initializeApp({
    apiKey: "AIzaSyAe5mXr4aLXq4-IceqTKunX4i7AXnnMM9E",
    authDomain: "project-manager-16631.firebaseapp.com",
    projectId: "project-manager-16631",
    storageBucket: "project-manager-16631.appspot.com",
    messagingSenderId: "484609735065",
    appId: "1:484609735065:web:eab87b5526a9cef0f4bb08",
    measurementId: "G-WWD6LYQD3T",
});

const auth = getAuth(app);

const db = getFirestore(app);
const users = collection(db, "users");
const projects = collection(db, "projects");

export { auth, users, projects };
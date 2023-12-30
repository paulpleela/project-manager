import "./App.css";
import SignIn from "./pages/SignIn";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAe5mXr4aLXq4-IceqTKunX4i7AXnnMM9E",
  authDomain: "project-manager-16631.firebaseapp.com",
  projectId: "project-manager-16631",
  storageBucket: "project-manager-16631.appspot.com",
  messagingSenderId: "484609735065",
  appId: "1:484609735065:web:eab87b5526a9cef0f4bb08",
  measurementId: "G-WWD6LYQD3T"
})

const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn auth={auth} />} />
        <Route path="/project/:project_id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

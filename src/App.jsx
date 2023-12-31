import "./App.css";
import SignIn from "./pages/SignIn";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { getFirestore } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth } from './utils/Auth';
import { useAuthState } from 'react-firebase-hooks/auth';

//const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/project/:project_id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

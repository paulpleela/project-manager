import "./App.css";
import Login from "./pages/Login";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project/:project_id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

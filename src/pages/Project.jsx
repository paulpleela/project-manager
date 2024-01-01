import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Board from "../components/Board";
import Chat from "../components/Chat";
import { useNavigate, useParams } from "react-router-dom";
import { auth, projects } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";

export default function Project() {
  const { project_id } = useParams();
  const [user] = useAuthState(auth);
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const projectRef = doc(projects, project_id);

    const unsubscribe = onSnapshot(projectRef, (doc) => {
      if (doc.exists) {
        let data = doc.data();
        setProjectData(data);
        setLoading(false);
      } else {
        console.error("Project not found");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [project_id]);

  if (loading) {
    return <span>Loading...</span>;
  }
  console.log(projectData);

  // const hasPermission = projectData.members.some(member => member.userId == user.uid);

  // if (!hasPermission) {
  //   return <span>No permission to access the project</span>;
  // }

  return user ? (
    projectData ? (
      <div className="bg-gradient-to-r from-indigo-500 to-teal-100 h-100">
        <Header title={projectData.title} photo={null}/>
        <div className="flex flex-col xl:flex-row">
          <Board />
          <Chat data={projectData} />
        </div>
      </div>
    ) : (
      navigate("/404")
    )
  ) : (
    <span>Not logged in</span>
  );
}

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Board from "../components/Board";
import Chat from "../components/Chat";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from 'firebase/firestore';

export default function Project() {
  const { project_id } = useParams();
  const [user] = useAuthState(auth);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const projectDocRef = doc(db, "projects", project_id);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataObj = await getDoc(projectDocRef);

        if (dataObj.exists()) {
          setData({ ...dataObj.data(), id: dataObj.id });
        } else {
          console.error("Project not found");
          navigate("/404");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  console.log(data);

  return user ? (
    data ? (
      <div className="bg-gradient-to-r from-indigo-500 to-teal-100 h-100">
        <Header title={data.title} photo={null}/>
        <div className="flex flex-col xl:flex-row">
          <Board />
          <Chat data={data} />
        </div>
      </div>
    ) : <span>Loading...</span>
  ) : (
    <span>Not logged in</span>
  );
}

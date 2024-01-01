import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Board from "../components/Board";
import Chat from "../components/Chat";
import { useNavigate, useParams } from "react-router-dom";
import { auth, users } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";

export default function Home() {
  const user_id = "rUC9UUOmSJ4Xr2zX4l5d";
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userRef = doc(users, user_id);

    const unsubscribe = onSnapshot(userRef, (doc) => {
      if (doc.exists) {
        let data = doc.data();
        setUserData(data);
        setLoading(false);
      } else {
        console.error("Project not found");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [user_id]);

  if (loading) {
    return <span>Loading...</span>;
  }
  console.log(userData);

  return user ? (
    userData ? (
      <div className="bg-gradient-to-r from-indigo-500 to-teal-100 h-100">
        <Header title={null} photo={userData.photo}/>
        <div className="flex flex-col xl:flex-row">

        </div>
      </div>
    ) : (
      navigate("/404")
    )
  ) : (
    <span>Not logged in</span>
  );
}

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Home() {
    const user_id = "rUC9UUOmSJ4Xr2zX4l5d"
    const [user] = useAuthState(auth);
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const userDocRef = doc(db, "users", user_id);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const dataObj = await getDoc(userDocRef);
  
          if (dataObj.exists()) {
            setData({ ...dataObj.data(), id: dataObj.id });
          } else {
            console.error("User not found");
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
        <Header title={null} photo={data.photo} />
        <div className="flex flex-col xl:flex-row"></div>
      </div>
    ) : (
      <span>Loading...</span>
    )
  ) : (
    <span>Not logged in</span>
  );
}

import React from "react";
import Header from "../components/Header";
import Board from "../components/Board";
import Chat from "../components/Chat";
import { useParams } from "react-router-dom";
import { auth } from '../utils/Auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Project() {
  const { project_id } = useParams();
  const [user] = useAuthState(auth);

  return (
    user ? (
      <div className="bg-gradient-to-r from-indigo-500 to-teal-100 h-100">
        <Header />
        <div className="flex flex-col xl:flex-row">
          <Board />
          <Chat />
        </div>
      </div>
    ) : (
      <span>Not logged in</span>
    )
  );
}

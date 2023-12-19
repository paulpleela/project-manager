import Header from "../components/Header";
import Board from "../components/Board";
import Chat from "../components/Chat";
import { useParams } from "react-router-dom"

export default function Project() {
  const { project_id } = useParams();

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-teal-100 h-100">
      <Header />
      <div className="flex flex-col xl:flex-row">
        <Board />
        <Chat />
      </div>
    </div>
  );
}

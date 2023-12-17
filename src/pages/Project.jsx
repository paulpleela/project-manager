import Header from "../components/Header";
import Board from "../components/Board";
import Chat from "../components/Chat";

export default function Project() {
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

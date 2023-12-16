import List from "./List";

export default function Board() {
  return (
    <div className="flex h-screen overflow-x-auto no-scrollbar">
      <List />
      <List />
      <List />
      <List />
      <List />
      <div className="flex items-center justify-center text-4xl text-center font-bold text-stone-600 bg-stone-200 shadow-lg h-5/6 w-14 shrink-0 ml-4 my-7 px-2 rounded-lg overflow-auto no-scrollbar">
        +
      </div>
    </div>
  );
}

import Card from "./Card";

export default function List() {
  return (
      <div className="bg-stone-200 shadow-lg h-auto w-80 shrink-0 ml-4 my-7 px-2 rounded-lg overflow-auto no-scrollbar">
        <div className="text-lg font-bold bg-stone-200 sticky top-0 w-full p-1">Example List Title</div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> 
        <div className="text-3xl text-center font-bold text-stone-500 bg-white shadow w-70 shrink-0 mt-3 pb-1 mb-2 rounded-lg">+</div>
      </div>
  );
}

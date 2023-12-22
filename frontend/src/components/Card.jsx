export default function Card(props) {
  return (
    <div className="bg-white shadow min-h-20 w-70 shrink-0 mb-3 p-2 rounded-lg">
      <div className="text-sm bg-indigo-100 rounded-lg my-1 text-center">
        15 December 2023 11:59
      </div>
      <div className="font-medium whitespace-normal">
        {props.content}
      </div>
      <div className="flex flex-wrap">
        <img
          className="w-6 rounded-full m-1 border-2 border-orange-500"
          alt="Tailwind CSS Navbar component"
          title="Placeholder Name"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
    </div>
  );
}

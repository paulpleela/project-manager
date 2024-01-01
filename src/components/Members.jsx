export default function Members({ members }) {
  console.log(members);
  return (
    <>
      <div className="flex flex-col overflow-y-auto no-scrollbar h-[calc(100vh-8rem)]">
        {members.map((member) => (
          <div key={member} className="flex h-12 bg-white items-center rounded-full mx-5 my-1.5 shadow">
            <div className="w-10 m-1 rounded-full overflow-hidden">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            {member}
          </div>
        ))}
        <div className="text-3xl text-center font-bold text-stone-500 bg-white shadow h-10 w-70 shrink-0 mx-5 my-1.5 rounded-full">
          +
        </div>
      </div>
    </>
  );
}

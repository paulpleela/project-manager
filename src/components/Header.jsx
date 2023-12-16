export default function Header() {
  return (
    <header className="max-h-16 fixed navbar bg-white sticky top-0 z-[1]">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 h-10 p-2 rounded-md fill-gray-800 hover:bg-gray-300"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <span className="font-medium px-2 text-gray-800 text-xl">
          Placeholder Project
        </span>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar hover:bg-gray-300"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <a className="z-[1] mt-1 p-1 menu menu-sm dropdown-content bg-indigo-600 rounded-full font-semibold text-white w-28 h-9 text-base text-center cursor-pointer hover:bg-indigo-700 hover:font-bold">
          Sign out
        </a>
      </div>
    </header>
  );
}

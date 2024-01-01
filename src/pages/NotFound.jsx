export default function NotFound() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-screen">
      <div className="text-9xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-300">
          404
        </span>
      </div>
      <span className="text-2xl font-bold">PAGE NOT FOUND</span>
      <span className="w-80 text-center">
        Sorry, the page you are looking for does not exist or is currently
        unavailable. Please check the URL and try again.
      </span>
      <a
        href="/"
        className="w-48 h-10 bg-indigo-500 font-semibold text-white px-2 shadow text-xl rounded-2xl hover:scale-105 flex items-center justify-center shadow-xl"
      >
        GO BACK HOME
      </a>
    </div>
  );
}

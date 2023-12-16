export default function Chat() {
  return (
    <div className="ml-1 bg-stone-100 h-screen">
      <div className="flex bg-indigo-100 my-2 mx-10 p-1 rounded-full items-center place-content-around">
        <div>
          <input
            type="radio"
            name="option"
            id="1"
            value="1"
            className="peer hidden"
          />
          <label
            for="1"
            className="block text-indigo-500 font-bold cursor-pointer select-none rounded-full py-1 px-7 text-center peer-checked:bg-indigo-500 peer-checked:text-indigo-100 transition duration-900"
          >
            Members
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="option"
            id="2"
            value="2"
            className="peer hidden"
            defaultChecked
          />
          <label
            for="2"
            className="block text-indigo-500 font-bold cursor-pointer select-none rounded-full py-1 px-7 text-center peer-checked:bg-indigo-500 peer-checked:text-indigo-100 transition duration-900"
          >
            Messages
          </label>
        </div>
      </div>
      <div className="h-[630px]"></div>
      <div className="flex bg-white rounded-full h-10 p-2 m-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="mi-outline mi-paperclip rounded-full fill-stone-800"
          viewBox="0 0 24 24"
        >
          <path d="M9.82 20.43c-1.34 0-2.69-.51-3.71-1.54-2.05-2.05-2.05-5.38 0-7.42l7.42-7.42a3.754 3.754 0 0 1 5.3 0c.71.71 1.1 1.65 1.1 2.65s-.39 1.94-1.1 2.65l-6.72 6.72c-.88.88-2.3.88-3.18 0-.43-.43-.66-.99-.66-1.59s.23-1.17.66-1.59l5.91-5.91c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.91 5.91a.75.75 0 1 0 1.06 1.06l6.72-6.72c.88-.88.88-2.3 0-3.18s-2.3-.88-3.18 0l-7.42 7.42c-.71.71-1.1 1.65-1.1 2.65s.39 1.94 1.1 2.65a3.754 3.754 0 0 0 5.3 0l4.72-4.72c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.72 4.72a5.25 5.25 0 0 1-3.71 1.54" />
        </svg>
        <input placeholder="Type something..." size="30" className="focus:outline-none"></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className="mi-solid mi-paper-plane fill-white bg-indigo-500 rounded-full"
          viewBox="-6 -5 33 33"
        >
          <path d="m2 21 20-9L2 3v7l14 2-14 2Z" />
        </svg>
      </div>
    </div>
  );
}

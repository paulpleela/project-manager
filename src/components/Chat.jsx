import Messages from "./Messages";
import Members from "./Members";
import { useState } from "react";

export default function Chat({data}) {
  const [radioToggle, setRadioToggle] = useState("Members");
  return (
    <div className="bg-stone-100 h-[calc(100vh-4rem)] xl:w-1/4 overflow-y-auto no-scrollbar">
      <div className="flex bg-indigo-100 w-11/12 max-w-[250px] my-2 p-1 w-56 rounded-full place-content-around sticky top-2 mx-auto">
        <div>
          <input
            type="radio"
            name="radio"
            id="Members"
            value="Members"
            className="peer hidden"
            checked={radioToggle === "Members"}
            onChange={() => setRadioToggle("Members")}
            onClick={() => {
              document.getElementById("messageInput").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
          <label
            htmlFor="Members"
            className="block text-indigo-500 font-bold cursor-pointer select-none rounded-full py-1 px-4 text-center peer-checked:bg-indigo-500 peer-checked:text-indigo-100 transition-transform transform hover:scale-110"
          >
            Members
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="radio"
            id="Messages"
            value="Messages"
            className="peer hidden"
            checked={radioToggle === "Messages"}
            onChange={() => setRadioToggle("Messages")}
            onClick={() => {
              document.getElementById("messageInput").scrollIntoView({
                behavior: "smooth",
              });
              setTimeout(() => {
                document.getElementById("chatBottom").scrollIntoView({
                  behavior: "auto",
                });
              }, 10);
            }}
          />
          <label
            htmlFor="Messages"
            className="block text-indigo-500 font-bold cursor-pointer select-none rounded-full py-1 px-4 text-center peer-checked:bg-indigo-500 peer-checked:text-indigo-100 transition-transform transform hover:scale-110"
          >
            Messages
          </label>
        </div>
      </div>

      <div id="messageInput">
        {radioToggle === "Messages" ? <Messages /> : <Members members={data.members}/>}
      </div>
    </div>
  );
}

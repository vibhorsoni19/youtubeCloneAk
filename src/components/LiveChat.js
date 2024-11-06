import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20) + " 🚀 🧨",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "vibhor",
        message: liveMessage + " 🚀 🧨",
      })
    );
    setLiveMessage("");
  }
  return (
    <>
      <div className="w-full ml-2 p-2 h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          className="w-96 px-2 "
          placeholder="Chat..."
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 ml-3 border border-black">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

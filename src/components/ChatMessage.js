import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img
        className="h-8 w-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFHxMW90_mQU2eor-m9-EfFOa6o2WHJ_6hujXYa6BMZbYuuDPhPEF2Z8&s"
      />

      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;

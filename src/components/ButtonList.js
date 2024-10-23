import React from "react";
import Button from "./Button";

const lists = [
  "All",
  "Gaming",
  "Songs",
  "News",
  "Cooking",
  "Soccer",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {lists.map((list,index) => {
        return <Button key= {index} name={list} />;
      })}
    </div>
  );
};

export default ButtonList;

import React from "react";
import { Shimmer } from "react-shimmer";

function Loader() {
  const numberOfBoxes = 12;

  return (
    <div className="flex flex-wrap bg ">
      {Array.from({ length: numberOfBoxes }).map((_, index) => (
        <div
          key={index}
          className="p-2 m-2 w-72 shadow-lg rounded-lg bg-gray-200"
        >
          <Shimmer width={300} height={200} />
        </div>
      ))}
    </div>
  );
}

export default Loader;

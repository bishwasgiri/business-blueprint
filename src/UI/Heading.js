import React from "react";

const Heading = (props) => {
  return (
    <div className="mx-auto mt-36 flex flex-col items-center justify-center space-y-3 ">
      <h1 className="text-4xl text-tertiary">{props.name}</h1>
      <span className="w-28 h-1 rounded-sm bg-action"></span>
    </div>
  );
};

export default Heading;

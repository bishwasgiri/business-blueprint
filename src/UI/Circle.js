import React from "react";

const Circle = () => {
  return (
    <div className="absolute hidden xl:block w-52 h-52 top-[-100px] right-[-100px] z-10">
      <div className="absolute inset-12 border-2 border-dotted border-tint rounded-full"></div>
      <div className="absolute inset-16 border-2 border-dotted border-tint rounded-full"></div>
      <div className="absolute inset-20 border-2 border-dotted border-tint rounded-full"></div>
      <div className="absolute inset-24 border-2 border-dotted border-tint rounded-full"></div>
    </div>
  );
};

export default Circle;

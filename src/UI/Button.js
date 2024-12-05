import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#f4b400] px-5 py-3 text-center text-xl text-tertiary rounded-md shadow-xl ">
      {props.children}
    </button>
  );
};

export default Button;

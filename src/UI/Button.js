import React from "react";

const Button = ({ classes, children, onClick }) => {
  const design = `${classes} + px-7 py-5 text-center text-2xl text-white rounded-md shadow-xl`;
  return (
    <button className={design} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

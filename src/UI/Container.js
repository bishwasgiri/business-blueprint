import React from "react";

const Container = (props) => {
  return <div className="mx-auto w-full lg:w-4/5 p-3 ">{props.children}</div>;
};

export default Container;

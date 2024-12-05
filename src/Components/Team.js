import React from "react";
import Heading from "../UI/Heading";
import Button from "../UI/Button";
import Circle from "../UI/Circle";
import { consult, packages } from "../Assets/asset";

const Team = () => {
  return (
    <div className="mt-36 mx-auto w-[70%] relative">
      <Heading name="Our Team" />
      <div className="mt-20 flex justify-between items-start space-x-5 relative">
        <div className="w-[600px] flex flex-col items-start justify-start space-y-5">
          <h1 className="text-4xl text-primary">Best Breed of Experts</h1>
          <p className="text-2xl text-tertiary opacity-50 font-sans text-justify">
            We are Nepal's best chartered accountancy firms, that have helped
            small to medium size businesses. We help them with all aspects of
            accounting. Our team members are expert in what they do and they
            help to thrive your businesses.
          </p>
          <div className="text-2xl text-tertiary opacity-50 font-sans flex space-x-5 items-center">
            <span className="inline-block text-tint ">{consult}</span>{" "}
            <span className="inline-block">Free consultation provided</span>
          </div>
          <div className="text-2xl text-tertiary opacity-50 font-sans flex space-x-5 items-center">
            <span className="inline-block text-tint">{packages}</span>
            <span className="inline-block">
              {" "}
              Flexible packages on accounting, tax and business growth
            </span>
          </div>
          <Button>Get in Touch</Button>
        </div>
        <div className=" w-[600px] h-[600px] relative z-20 ">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team"
            className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] "
          />
        </div>
        <Circle />
      </div>
    </div>
  );
};

export default Team;

import React from "react";
import Heading from "../UI/Heading";
import Button from "../UI/Button";
import Circle from "../UI/Circle";
import { consult, packages } from "../Assets/asset";

const Team = () => {
  return (
    <div
      id="teams"
      className="mt-36 mx-auto w-full lg:w-[85%] xl:w-[70%] xl:h-screen relative"
    >
      <Heading name="Our Team" />
      <div className="mt-20 xl:h-[80vh]">
        <div className=" mx-auto w-[80%]  lg:w-full flex flex-col-reverse  justify-center items-center space-x-0 gap-7 lg:flex-row lg:justify-between lg:items-center lg:space-x-5 lg:space-y-0 relative">
          <div className="w-full flex  flex-col items-start justify-start space-y-5 lg:flex-1  lg:space-y-3 xl:max-w-xl xl:space-y-5">
            <h1 className="text-4xl text-primary  xl:text-5xl ">
              Best Breed of Experts
            </h1>
            <p className="text-2xl text-tertiary text-justify ">
              The business blueprint is one of the best business consulting
              platform in Nepal that have helped small and medium size
              businesses. We help them with all aspects of accounting. Our team
              members are expert in what they do and they help to thrive your
              businesses.
            </p>
            <div className="text-2xl text-tertiary  font-sans flex space-x-5 items-center ">
              <span className="inline-block bg-tint rounded-full p-2">
                {consult}
              </span>{" "}
              <span className="inline-block text-primary font-bold ">
                Free consultation provided
              </span>
            </div>
            <div className="text-2xl text-tertiary  font-sans flex space-x-5 items-center ">
              <span className="inline-block bg-tint rounded-full p-2">
                {packages}
              </span>
              <span className="inline-block text-primary font-bold">
                {" "}
                Flexible packages on accounting, tax and business growth
              </span>
            </div>
            <Button classes="bg-action">Get in Touch</Button>
          </div>
          <div className="w-[500px] h-[500px] relative z-20 ">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="team"
              className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] "
            />
          </div>
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default Team;

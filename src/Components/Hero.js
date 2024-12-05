import React from "react";
import Button from "../UI/Button";
import Circle from "../UI/Circle";

const Hero = () => {
  return (
    <div className="mt-36 mx-auto w-[70%] flex justify-between items-start relative">
      <div className="w-[600px] uppercase flex flex-col items-start space-y-5 text-tertiary">
        <p className="text-4xl leading-10 ">
          We do the <span className="underline decoration-action">numbers</span>
        </p>
        <p className="text-4xl">and help you</p>
        <span className=" text-[180px] leading-[180px] text-primary font-bold cursor-pointer hover:scale-x-105 transition-all duration-300 ease-in-out">
          Grow
        </span>
        <span className="text-4xl font-bold">Your Business</span>
        <Button>Get in Touch</Button>
      </div>

      <div className=" w-[600px] h-[600px] relative z-20">
        <img
          className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px]"
          src="https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <Circle />
    </div>
  );
};

export default Hero;

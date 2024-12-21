import React from "react";
import Button from "../UI/Button";
import Circle from "../UI/Circle";
import personImage from "../Images/work_person.png";

const Hero = () => {
  const handleRedirect = () => {
    // Replace with your Google Form URL
    console.log("button  clicked");
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdPrK7lBvd1k7vIZHhP0f23kFBgrR_cxH1EYTDdjhejG3FPPA/viewform?usp=sharing";
    window.open(googleFormUrl, "_blank"); // Opens in a new tab
  };

  return (
    <div className="mt-20 lg:mt-24 mx-auto w-full lg:w-[70%] flex flex-col items-center justify-center space-y-7 xl:flex-row xl:justify-between xl:items-center relative">
      <div className="w-full lg:w-[600px] uppercase flex flex-col items-center lg:items-start space-y-7 text-tertiary relative">
        <p className="text-3xl md:text-5xl leading-10">
          <span className="opacity-40">We do the</span>
          <span className="ml-3 underline decoration-action font-bold">
            numbers
          </span>
        </p>
        <p className="text-3xl md:text-5xl opacity-40">and help you</p>
        <span className="text-[100px] leading-[100px] md:text-[180px] md:leading-[180px] text-primary font-extrabold cursor-pointer hover:scale-x-105 transition-all duration-300 ease-in-out">
          Grow
        </span>
        <span className="text-4xl md:text-6xl font-bold">Your Business</span>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start space-y-5 space-x-0 lg:space-y-0 lg:space-x-5">
          <Button classes="bg-secondary">Get in Touch</Button>
          <Button classes="bg-action" onClick={handleRedirect}>
            Initial Consultation
          </Button>
        </div>
      </div>

      <div className=" w-full h-full lg:w-[600px] lg:h-[600px]  z-20 bg-zinc-50 rounded-tl-[100px] rounded-br-[100px] shadow-md relative">
        <img
          src={personImage}
          alt="person_working"
          className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] "
        />
      </div>
      <Circle />
    </div>
  );
};

export default Hero;

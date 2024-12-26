import React from "react";
import Button from "../UI/Button";
import Circle from "../UI/Circle";
import personImage from "../Images/work_person.png";

const Hero = () => {
  const handleRedirect = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdPrK7lBvd1k7vIZHhP0f23kFBgrR_cxH1EYTDdjhejG3FPPA/viewform?usp=sharing";
    window.open(googleFormUrl, "_blank"); // Opens in a new tab
  };

  return (
    <div className="mt-10 mx-auto w-full flex flex-col items-center justify-center space-x-0 space-y-4  md:space-y-6 lg:space-y-0   lg:flex-row lg:justify-center  lg:items-center  lg:w-[85%] xl:w-[70%] xl:justify-between xl:space-x-6 xl:mt-14 relative">
      <div className="mx-auto w-[80%] h-full uppercase flex flex-col items-center space-y-4  md:space-y-4 lg:items-start lg:justify-center lg:space-y-7   xl:space-between  xl:flex-1  xl:h-[100%]  relative">
        <p className="flex flex-col items-center space-y-1 lg:items-start">
          <span className="text-2xl md:text-4xl lg:text-2xl">
            The Architect of{" "}
          </span>

          <span className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl ">
            Business{" "}
            <span className="text-primary font-extrabold">Excellence</span>
          </span>
        </p>
        <p className="flex flex-col items-center space-y-1 lg:items-start ">
          <span className="text-2xl md:text-4xl lg:text-2xl ">
            Building Framework For
          </span>

          <span className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl ">
            Business{" "}
            <span className="text-primary font-extrabold">Successes</span>
          </span>
        </p>

        <div className="flex flex-col items-center space-y-4 space-x-0 md:space-y-6 lg:space-y-4 lg:items-start xl:space-x-4 xl:flex-row   xl:space-y-0 relative">
          <Button classes="bg-secondary text-center">Get in Touch</Button>
          <Button classes="bg-action" onClick={handleRedirect}>
            Initial Consultation
          </Button>
        </div>
      </div>

      <div className=" w-[500px] h-[500px] md:w-[80%] xl:w-[500px]   rounded-tl-[100px] rounded-br-[100px] shadow-md relative bg-gray-100 z-20">
        <img
          src={personImage}
          alt="person_working"
          className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px]"
        />
        <Circle />
      </div>
    </div>
  );
};

export default Hero;

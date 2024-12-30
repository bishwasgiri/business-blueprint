import React from "react";
import Button from "../UI/Button";
import Circle from "../UI/Circle";
import personImage from "../Images/work_person.png";
import first from "../Images/first.png";
import sales from "../Images/sales.png";
import time from "../Images/time.png";
import { delay, easeIn, motion } from "motion/react";

const parentVariant = {
  initial: {
    x: "100px",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
      ease: easeIn,
      duration: 0.6,
      when: "beforeChildren",
      delay: 0.6,
    },
  },
};

const childrenVariant = {
  initial: {
    y: "10px",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Use spring-like animation
      stiffness: 120, // Adjust stiffness for more bounce
      damping: 10, // Adjust damping for smoothness
      duration: 0.6, // Optional duration for fine-tuning
    },
  },
};

const Hero = () => {
  const handleRedirect = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdPrK7lBvd1k7vIZHhP0f23kFBgrR_cxH1EYTDdjhejG3FPPA/viewform?usp=sharing";
    window.open(googleFormUrl, "_blank"); // Opens in a new tab
  };

  return (
    <div className="mt-10 mx-auto w-full flex flex-col items-center justify-center space-x-0 space-y-4  md:space-y-8 lg:space-y-0  lg:w-[85%] lg:flex-row lg:justify-between  lg:items-center lg:space-x-5 xl:w-[80%] 2xl:w-[75%]   xl:mt-14 relative ">
      <motion.div
        initial={{ x: "-100px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
        className="mx-auto w-[80%] h-full uppercase flex flex-col items-center space-y-4  md:space-y-8   lg:items-start lg:justify-center lg:space-y-7   sec:justify-between    xl:h-[100%]   relative"
      >
        <p className="flex flex-col items-center space-y-1 lg:items-start text-tertiary">
          <span className="text-2xl md:text-4xl lg:text-2xl">
            The Architect of{" "}
          </span>

          <span className="text-2xl md:text-4xl  lg:text-6xl xl:text-8xl ">
            Business{" "}
            <span className="text-secondary font-extrabold">Excellence</span>
          </span>
        </p>
        <p className="flex flex-col items-center space-y-1 lg:items-start text-tertiary ">
          <span className="text-2xl text-center md:text-4xl lg:text-2xl ">
            Building Framework For
          </span>

          <span className="text-2xl md:text-4xl  lg:text-6xl xl:text-8xl ">
            Business{" "}
            <span className="text-secondary font-extrabold">Successes</span>
          </span>
        </p>

        <div className="flex flex-col items-center space-y-4 lg:items-start  sec:flex-row sec:space-x-2 sec:space-y-0  relative">
          <Button classes="bg-secondary text-center">Get in Touch</Button>

          <Button classes="bg-action text-center" onClick={handleRedirect}>
            Initial Consultation
          </Button>
        </div>
      </motion.div>

      <motion.div className=" w-[500px] h-[500px] flex flex-col items-center justify-end xl:justify-center">
        <motion.div
          variants={parentVariant}
          initial="initial"
          animate="animate"
          className="w-[60%] md:w-full md:h-full  shadow-2xl relative z-60  border rounded-tl-[100px] rounded-br-[100px] "
        >
          <img
            src={personImage}
            alt="person_working"
            className="w-full h-full object-cover border rounded-tl-[100px] rounded-br-[100px]  relative"
          />
          <motion.div
            variants={childrenVariant}
            className="absolute top-[120px]  w-[30%] left-[-40px] md:left-[-50px] xl:left-[-60px] xl:w-[120px] "
          >
            <img src={sales} alt="sales" className="w-full h-full" />
          </motion.div>
          <motion.div
            variants={childrenVariant}
            className="absolute top-[-35px] left-[100px]  p-3  "
          >
            <img src={time} alt="time" />
          </motion.div>
          <motion.div
            variants={childrenVariant}
            className="absolute top-[200px] xl:right-[-90px] w-[30%] right-[-40px] md:right-[-70px] xl:w-[172px]"
          >
            <img src={first} alt="integration" />
          </motion.div>

          <div className="absolute bottom-[-35px] left-[-20px] w-[200px] h-[70px] rounded-lg"></div>
          <Circle />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

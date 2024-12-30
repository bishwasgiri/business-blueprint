import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navigation = ({ isHamPresent }) => {
  let classes = "";
  if (isHamPresent) {
    classes =
      "absolute right-5 top-[150px] z-40 shadow-xl rounded-md bg-gray-100 text-xl md:text-2xl text-tertiary p-5 space-y-2";
  } else {
    classes =
      "flex justify-between items-center text-xl space-x-6 text-tertiary relative";
  }
  return (
    <motion.ul
      initial={{ x: "100px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.37, 0, 0.63, 1], duration: 1.2 }}
      className={classes}
    >
      <li className="group cursor-pointer  relative ">
        <Link to="/" className="hover:text-secondary relative block">
          Home
        </Link>
        <span className=" absolute bottom-[-4px] left-0  bg-action border rounded-2xl h-1 w-0 duration-300 ease-in-out group-hover:w-full "></span>
      </li>
      <li className="group cursor-pointer  relative ">
        <ScrollLink
          to="services"
          smooth={true}
          duration={1000}
          className="hover:text-secondary relative block"
        >
          Our Services
        </ScrollLink>
        <span className="absolute bottom-[-4px] left-0 bg-action border rounded-2xl h-1 w-0 duration-300 group-hover:w-full "></span>
      </li>
      <li className="group cursor-pointer  relative ">
        <ScrollLink
          to="works"
          smooth={true}
          duration={1000}
          className="hover:text-secondary relative block"
        >
          How it Works
        </ScrollLink>
        <span className="absolute bottom-[-4px] left-0 bg-action border rounded-2xl h-1 w-0 duration-300 group-hover:w-full "></span>
      </li>
      <li className="group cursor-pointer  relative ">
        <ScrollLink
          to="teams"
          smooth={true}
          duration={1000}
          className="hover:text-secondary relative block"
        >
          Our Team
        </ScrollLink>
        <span className="absolute bottom-[-4px] left-0 bg-action border rounded-2xl h-1 w-0 duration-300 group-hover:w-full "></span>
      </li>
      <li className="group cursor-pointer  relative ">
        <ScrollLink
          to="videos"
          smooth={true}
          duration={1000}
          className="hover:text-secondary relative block"
        >
          Videos
        </ScrollLink>
        <span className="absolute bottom-[-4px] left-0 bg-action border rounded-2xl h-1 w-0 duration-300 group-hover:w-full "></span>
      </li>
      <li className="group cursor-pointer  relative ">
        <ScrollLink
          to="contacts"
          smooth={true}
          duration={1000}
          className="hover:text-secondary relative block"
        >
          Contact Us
        </ScrollLink>
        <span className="absolute bottom-[-4px] left-0 bg-action border rounded-2xl h-1 w-0 duration-300 group-hover:w-full "></span>
      </li>
    </motion.ul>
  );
};

export default Navigation;

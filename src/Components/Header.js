import React, { useState } from "react";
import Container from "../UI/Container";
import Navigation from "./Navigation";
import { cross, hamburger, phone } from "../Assets/asset";
import { email } from "../Assets/asset";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hamIsClicked, setHamIsClicked] = useState(false);
  const handleHamburger = () => {
    setHamIsClicked(!hamIsClicked);
  };
  return (
    <>
      <div className="h-14 bg-secondary mx-auto relative ">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.37, 0, 0.63, 1], duration: 1.2 }}
          className="mx-auto w-full lg:w-[90%] flex justify-end items-center space-x-4 p-4 relative"
        >
          <div className="flex items-center  space-x-2 relative">
            <span className="text-white">{phone}</span>
            <span className="font-sans text-white text-xl">9808123465</span>
          </div>
          <div className="flex items-center  space-x-2 relative">
            <span className="text-white">{email}</span>
            <span className="font-sans text-xl text-white font-semibold">
              test@gmail.com
            </span>
          </div>
        </motion.div>
      </div>
      <Container>
        <header className="flex justify-between items-center relative">
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 1.2 }}
            className="relative"
          >
            <Link
              to="/"
              className="flex flex-col items-center justify-center flex-3"
            >
              <h1 className="text-primary font-bold tracking-tighter text-xl ">
                The Business
              </h1>
              <h1 className="uppercase text-3xl font-semibold bg-primary p-4 rounded-md text-white shadow-xl">
                Blueprint
              </h1>
            </Link>
          </motion.div>
          <nav className="relative">
            <div className="flex xl:hidden relative" onClick={handleHamburger}>
              {hamIsClicked ? (
                <span className="text-primary">{cross}</span>
              ) : (
                <span className="text-primary">{hamburger}</span>
              )}
            </div>

            <div className="hidden xl:flex">
              <Navigation isHamPresent={false} />
            </div>
          </nav>
        </header>
        {hamIsClicked && (
          <div className="block xl:hidden">
            <Navigation isHamPresent={true} />
          </div>
        )}
      </Container>
    </>
  );
};

export default Header;

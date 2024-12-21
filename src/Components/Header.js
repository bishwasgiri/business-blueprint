import React, { useState } from "react";
import Container from "../UI/Container";
import { cross, hamburger, phone } from "../Assets/asset";
import { email } from "../Assets/asset";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [hamIsClicked, setHamIsClicked] = useState(false);
  const handleHamburger = () => {
    setHamIsClicked(!hamIsClicked);
  };
  return (
    <>
      <div className="h-14 bg-secondary mx-auto ">
        <div className="mx-auto w-full lg:w-4/5 flex justify-end items-center space-x-4 p-4">
          <div className="flex items-center  space-x-2">
            <span className="text-white">{phone}</span>
            <span className="font-sans text-white text-xl">9808123465</span>
          </div>
          <div className="flex items-center  space-x-2">
            <span className="text-white">{email}</span>
            <span className="font-sans text-xl text-white font-semibold">
              test@gmail.com
            </span>
          </div>
        </div>
      </div>
      <Container>
        <header className="flex justify-between items-center">
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
          <nav className="relative">
            <div className="flex xl:hidden" onClick={handleHamburger}>
              {hamIsClicked ? cross : hamburger}
            </div>

            <ul className="hidden xl:flex justify-between items-center text-xl space-x-6">
              <li className="hover:text-secondary cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-secondary cursor-pointer">
                <ScrollLink to="services" smooth={true} duration={1000}>
                  Our Services
                </ScrollLink>
              </li>
              <li className="hover:text-secondary cursor-pointer">
                <ScrollLink to="works" smooth={true} duration={1000}>
                  How it Works
                </ScrollLink>
              </li>
              <li className="hover:text-secondary cursor-pointer">
                <ScrollLink to="teams" smooth={true} duration={1000}>
                  Our Team
                </ScrollLink>
              </li>
              <li className="hover:text-secondary cursor-pointer">
                <ScrollLink to="videos" smooth={true} duration={1000}>
                  Videos
                </ScrollLink>
              </li>
              <li className="hover:text-secondary cursor-pointer">
                <ScrollLink to="contacts" smooth={true} duration={1000}>
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </header>
        {hamIsClicked && (
          <ul className="absolute right-5 top-[150px] flex flex-col justify-center items-center z-40 shadow-xl p-3 rounded-md bg-gray-100 text-xl md:text-2xl text-tertiary">
            <li className="hover:text-secondary cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-secondary cursor-pointer">
              <ScrollLink to="services" smooth={true} duration={1000}>
                Our Services
              </ScrollLink>
            </li>
            <li className="hover:text-secondary cursor-pointer">
              <ScrollLink to="works" smooth={true} duration={1000}>
                How it Works
              </ScrollLink>
            </li>
            <li className="hover:text-secondary cursor-pointer">
              <ScrollLink to="teams" smooth={true} duration={1000}>
                Our Team
              </ScrollLink>
            </li>
            <li className="hover:text-secondary cursor-pointer">
              <ScrollLink to="videos" smooth={true} duration={1000}>
                Videos
              </ScrollLink>
            </li>
            <li className="hover:text-secondary cursor-pointer">
              <ScrollLink to="contacts" smooth={true} duration={1000}>
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        )}
      </Container>
    </>
  );
};

export default Header;

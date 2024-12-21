import React, { useState } from "react";
import Container from "../UI/Container";
// import Button from "../UI/Button";
import { cross, hamburger, phone } from "../Assets/asset";
import { email } from "../Assets/asset";

const Header = () => {
  const [hamIsClicked, setHamIsClicked] = useState(false);
  const handleHamburger = () => {
    console.log("ham is clicked");
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
          <div className="flex flex-col items-center justify-center flex-3">
            <h1 className="text-primary font-bold tracking-tighter text-xl ">
              The Business
            </h1>
            <h1 className="uppercase text-3xl font-semibold bg-primary p-4 rounded-md text-white shadow-xl">
              Blueprint
            </h1>
          </div>
          <nav className="relative">
            <div className="flex xl:hidden" onClick={handleHamburger}>
              {hamIsClicked ? cross : hamburger}
            </div>

            <ul className="hidden xl:flex justify-between items-center text-xl space-x-6">
              <li className="hover:text-secondary">
                <a href="/home">Home</a>
              </li>
              <li className="hover:text-secondary">
                <a href="/home">Our Services</a>
              </li>
              <li className="hover:text-secondary">
                <a href="/home">How it Works</a>
              </li>
              <li className="hover:text-secondary">
                <a href="/home">Our Team</a>
              </li>
              <li className="hover:text-secondary">
                <a href="/home">Videos</a>
              </li>
              <li className="hover:text-secondary">
                <a href="/home">Contact Us</a>
              </li>
            </ul>
          </nav>
        </header>
        {hamIsClicked && (
          <ul className="absolute right-5 top-[150px] flex flex-col justify-center items-center z-40 shadow-xl p-3 rounded-md bg-gray-100 text-xl md:text-2xl text-tertiary">
            <li className="hover:text-secondary">
              <a href="/home">Home</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/home">Our Services</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/home">How it Works</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/home">Our Team</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/home">Videos</a>
            </li>
            <li className="hover:text-secondary">
              <a href="/home">Contact Us</a>
            </li>
          </ul>
        )}
      </Container>
    </>
  );
};

export default Header;

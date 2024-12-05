import React from "react";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { phone } from "../Assets/asset";

const Header = () => {
  return (
    <Container>
      <header className="flex items-center">
        <div className="flex flex-col items-center justify-center flex-3">
          <h1 className="text-primary font-bold tracking-tighter text-xl ">
            My Business
          </h1>
          <h1 className="uppercase text-3xl font-semibold bg-primary p-3 rounded-md text-white shadow-xl">
            Blueprint
          </h1>
        </div>
        <nav className="flex-1 flex flex-col items-end justify-center space-y-4">
          <div className="flex justify-end items-center space-x-5">
            <div className="flex items-center  space-x-1">
              <span className="text-primary">{phone}</span>
              <span className="font-sans text-xl text-primary font-semibold">
                9808123465
              </span>
            </div>

            <Button>Instant Quotation</Button>
          </div>
          <ul className="flex justify-between items-center text-xl w-[60%] text-tertiary ">
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
    </Container>
  );
};

export default Header;

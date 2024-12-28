import React from "react";
import { PiFacebookLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { email, phone } from "../Assets/asset";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="contacts" className="mt-36">
      <div className="bg-secondary text-white p-10">
        <div className="mx-auto w-full lg:w-[80%] flex flex-col justify-center items-center space-y-5">
          <footer className="flex w-full flex-col-reverse justify-center items-center gap-7  lg:flex-row  lg:justify-between lg:items-start">
            <div className="flex flex-col items-center  lg:items-start space-y-3 ">
              <Link
                to="/"
                className="flex flex-col items-center justify-center flex-3"
              >
                <h1 className="text-white font-bold tracking-tighter text-xl ">
                  The Business
                </h1>
                <h1 className="uppercase text-3xl font-semibold bg-primary p-3 rounded-md text-white shadow-xl">
                  Blueprint
                </h1>
              </Link>
              <p className="text-xl text-center lg:text-start">
                We build your businesses to reach great heights.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-3">
              <h1 className="text-2xl">Quick Links</h1>
              <ul className="text-xl flex flex-col items-center lg:items-start space-y-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="/home">Our Services</a>
                </li>
                <li>
                  <a href="/home">How it Works</a>
                </li>
                <li>
                  <a href="/home">Videos</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <h1 className="text-2xl">Get in Touch</h1>
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="flex justify-start items-center space-x-3">
                  <a href="/home" className="inline-block">
                    <PiFacebookLogoThin size={30} className="text-white" />
                  </a>
                  <a href="/home" className="inline-block ">
                    <PiInstagramLogoThin size={30} className="text-white" />
                  </a>
                  <a href="/home" className="inline-block ">
                    <PiYoutubeLogoThin size={30} className="text-white" />
                  </a>
                </div>
                <div className="flex items-center  space-x-2">
                  <span className="text-white">{phone}</span>
                  <span className="font-sans text-xl text-white font-semibold">
                    9808123465
                  </span>
                </div>
                <div className="flex items-center  space-x-2">
                  <span className="text-white">{email}</span>
                  <span className="font-sans text-xl text-white font-semibold">
                    test@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </footer>
          <div className="mx-auto w-full h-[1px] bg-white opacity-50"></div>
          <div className="flex justify-center items-center space-x-10 lg:justify-between  w-full">
            <span className="inline-block">
              {" "}
              &copy; <span className="font-sans">{currentYear}</span> All Rights
              Reserved
            </span>
            <span className="inline-block">
              Registration No: <span className="font-sans">559956656</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

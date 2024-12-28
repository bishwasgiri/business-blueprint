import React from "react";
import Heading from "../UI/Heading";
import { addition } from "../Assets/asset";

const Faq = () => {
  return (
    <div className="mt-36 mx-auto w-full md:w-[80%] lg:w-[85%] xl:w-[70%] xl:h-screen">
      <Heading name="Frequently Asked Questions" />
      <div className="mt-20 mx-auto w-[80%] lg:w-[85%] min-w-md flex flex-col space-y-5 xl:h-[80vh]">
        <div className="border-2 rounded  p-3 text-xl cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            What type of Business do we work with?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded  p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            Are Your Services affordable for small business?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded  p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary">
            What makes "The Business Blueprint" different from other platforms?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded  p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary">
            What is the process of getting started?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded  p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            How do i know if i need business consultation?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded  p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary">
            How long does a typical business consultation project take place?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded  p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            Do you provide ongoing supports after the project is completed?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
      </div>
    </div>
  );
};

export default Faq;

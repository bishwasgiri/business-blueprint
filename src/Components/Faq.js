import React from "react";
import Heading from "../UI/Heading";
import { addition } from "../Assets/asset";

const Faq = () => {
  return (
    <div className="mt-36 mx-auto w-[70%]">
      <Heading name="Frequently Asked Questions" />
      <div className="mt-20 mx-auto w-[60%] flex flex-col space-y-5">
        <div className="border-2 rounded border-tint p-3 text-xl cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            is my business blueprint regulated?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded border-tint p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            is my business blueprint regulated?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded border-tint p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            is my business blueprint regulated?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded border-tint p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            is my business blueprint regulated?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
        <div className="border-2 rounded border-tint p-3 text-xl  cursor-pointer flex justify-between items-center shadow-sm">
          <span className="inline-block text-tertiary ">
            is my business blueprint regulated?
          </span>
          <span className="inline-block text-tertiary ">{addition}</span>
        </div>
      </div>
    </div>
  );
};

export default Faq;

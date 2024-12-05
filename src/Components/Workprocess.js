import React from "react";
// import Container from "../UI/Container";
import Heading from "../UI/Heading";
import { arrow } from "../Assets/asset";

const Workprocess = () => {
  return (
    <div className="mt-36 mx-auto w-[70%]">
      <Heading name="How it Works" />
      <div className="mt-20  flex items-center justify-between ">
        <div className="flex flex-col items-center justify-center w-[350px]  space-y-4">
          <h1 className=" bg-tint text-white w-20 h-20 rounded-full flex items-center justify-center">
            <span className="inline-block font-sans">Step-1</span>
          </h1>
          <h1 className="text-xl">Initial Consultation</h1>
          <p className="font-sans opacity-50 text-tertiary text-xl text-justify">
            We begin by understanding your financial needs and goals. Share your
            challenges and objectives with our team of experts in a free
            consultation.
          </p>
        </div>
        <div className="text-tint">{arrow}</div>
        <div className="flex flex-col items-center justify-center  w-[350px]  space-y-4">
          <h1 className=" bg-tint text-white w-20 h-20 rounded-full flex items-center justify-center">
            <span className="inline-block font-sans">Step-2</span>
          </h1>
          <h1 className="text-xl">Expert Analysis</h1>
          <p className="font-sans opacity-50 text-tertiary text-xl text-justify">
            Provide your financial documents, and we’ll handle the rest. Our
            team evaluates your data to identify savings opportunities,
            inefficiencies, and compliance gaps.
          </p>
        </div>
        <div className="text-tint">{arrow}</div>
        <div className="flex flex-col items-center justify-center  w-[350px] space-y-4">
          <h1 className=" bg-tint text-white w-20 h-20 rounded-full flex items-center justify-center">
            <span className="inline-block font-sans">Step-3</span>
          </h1>
          <h1 className="text-xl">Results Delivered</h1>
          <p className="font-sans opacity-50 text-tertiary text-xl text-justify">
            We execute the plan, ensuring your finances are accurate, compliant,
            and optimized. Enjoy ongoing support for bookkeeping, tax filing,
            payroll, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workprocess;

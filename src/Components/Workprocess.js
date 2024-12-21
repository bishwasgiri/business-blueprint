import React from "react";
// import Container from "../UI/Container";
import Heading from "../UI/Heading";
import { arrow } from "../Assets/asset";

const Workprocess = () => {
  return (
    <div id="works" className="mt-36 mx-auto w-full md:w-[70%] ">
      <Heading name="How it Works" />
      <div className="mt-20  flex flex-col items-center justify-center space-y-4 xl:space-y-0 xl:flex-row xl:items-stretch xl:justify-evenly xl:space-x-4 xl:bg-gray-100 p-3 xl:p-10 rounded-tl-[100px] rounded-br-[100px] shadow-sm">
        <div className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full  ">
          <h1 className="bg-action w-20 h-20 rounded-full flex items-center justify-center">
            <span className="inline-block font-sans text-white">Step-1</span>
          </h1>
          <h1 className="text-2xl text-primary">Initial Consultation</h1>
          <section className="font-sans text-xl p-3  ">
            <ul className="list-disc space-y-2 opacity-50 text-justify w-full ">
              <li className="">
                We start by understanding your businesses,goals,challenges and
                visions.
              </li>
              <li>
                Our Team conducts an in-depth analysis of your market,
                competitors and opportunities.
              </li>
              <li>
                A personalized consultation session helps us align our solutions
                with your unique needs.
              </li>
            </ul>
          </section>
        </div>
        <div className="hidden xl:flex text-primary  items-center justify-center">
          {arrow}
        </div>
        <div className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full">
          <h1 className="bg-action w-20 h-20 rounded-full flex items-center justify-center">
            <span className="inline-block font-sans text-white">Step-2</span>
          </h1>
          <h1 className="text-2xl text-primary">Customization</h1>
          <section className="font-sans text-xl  p-3  ">
            <ul className="list-disc space-y-2 opacity-50 text-justify">
              <li>
                Based on the informations gathered, we develop a suitable
                strategy for your business.
              </li>
              <li>
                Our plans are practical, actionable and designed to deliver
                measurable results.
              </li>
              <li>
                We ensure transparency and collaborate closely with you to
                refine and finalize the strategy.
              </li>
            </ul>
          </section>
        </div>

        <div className="hidden xl:flex text-primary  items-center justify-center">
          {arrow}
        </div>
        <div className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full ">
          <h1 className="bg-action w-20 h-20 rounded-full flex items-center justify-center">
            <span className="inline-block font-sans text-white">Step-3</span>
          </h1>
          <h1 className="text-2xl text-primary">Implementations</h1>
          <section className="font-sans text-xl p-3 ">
            <ul className="list-disc space-y-2 opacity-50">
              <li>
                We guide you step-by-step through the implementation process.
              </li>
              <li>
                Our team remains available for the ongoing support, performance
                tracking and necessary adjustments.
              </li>
              <li>
                Regular reviews and update keep your business on a path to
                success.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Workprocess;

import React from "react";
import Heading from "../UI/Heading";

const Workprocess = () => {
  return (
    <div
      id="works"
      className="mt-36 mx-auto w-full md:w-[80%] lg:w-[85%] xl:w-[70%] "
    >
      <Heading name="How it Works" />
      <div className="mt-20  flex flex-col items-center justify-center space-y-4 xl:space-y-0 xl:flex-row xl:items-stretch xl:justify-evenly xl:space-x-4  p-3 xl:p-12 rounded-tl-[100px] rounded-br-[100px] shadow-sm bg-gray-100">
        <div className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full  lg:space-y-6 ">
          <h1 className="bg-action w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20 rounded-full flex items-center justify-center">
            <span className="inline-block font-sans text-white lg:text-2xl xl:text-xl ">
              Step-1
            </span>
          </h1>
          <h1 className="text-2xl text-primary lg:text-5xl xl:text-3xl">
            Initial Consultation
          </h1>
          <section className="font-sans text-xl p-3   ">
            <ul className="list-disc space-y-2 w-full lg:space-y-6  lg:text-4xl xl:text-[25px] opacity-50">
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
        <div className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full lg:space-y-6">
          <h1 className="bg-action w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  rounded-full flex items-center justify-center">
            <span className="inline-block font-sans text-white text-xl xl:text-xl">
              Step-2
            </span>
          </h1>
          <h1 className="text-2xl text-primary lg:text-5xl xl:text-3xl">
            Customization
          </h1>
          <section className="font-sans text-xl  p-3  ">
            <ul className="list-disc space-y-2 opacity-50 tlg:space-y-6 lg:text-4xl xl:text-[25px]">
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

        <div className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full lg:space-y-6">
          <h1 className="bg-action w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  rounded-full flex items-center justify-center">
            <span className="inline-block font-sans text-white lg:text-2xl xl:text-xl">
              Step-3
            </span>
          </h1>
          <h1 className="text-2xl text-primary lg:text-5xl xl:text-3xl">
            Implementations
          </h1>
          <section className="font-sans text-xl p-3 ">
            <ul className="list-disc space-y-2 opacity-50 lg:space-y-6 lg:text-4xl xl:text-[25px]">
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

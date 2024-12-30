import React from "react";
import Heading from "../UI/Heading";
import { motion } from "motion/react";

const parentVariant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,

    transition: {
      staggerChildren: 0.6,
    },
  },
};

const childrenVariant = {
  initial: {
    y: "20px",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: [0.37, 0, 0.63, 1],
      duration: 0.6, // Optional duration for fine-tuning
    },
  },
};

const Workprocess = () => {
  return (
    <div id="works" className="mt-36 mx-auto xl:h-screen ">
      <Heading name="How it Works" />
      <div className="mt-20   p-3 xl:p-12 rounded-tl-[100px] rounded-br-[100px] shadow-sm bg-white xl:h-[80vh] flex items-center">
        <div className="mx-auto w-[75%]">
          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className=" flex flex-col items-center justify-center space-y-4 xl:space-y-0 xl:flex-row xl:items-stretch xl:justify-evenly xl:space-x-4"
          >
            <motion.div
              variants={childrenVariant}
              className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full  lg:space-y-6 "
            >
              <h1 className="bg-action w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20 rounded-full flex items-center justify-center">
                <span className="inline-block font-sans text-white lg:text-2xl xl:text-xl ">
                  Step-1
                </span>
              </h1>
              <h1 className="text-2xl text-primary ">Initial Consultation</h1>
              <section className="font-sans text-xl p-3   ">
                <ul className="list-disc space-y-2 w-full  lg:space-y-6  ">
                  <li className="">
                    We start by understanding your businesses,goals,challenges
                    and visions.
                  </li>
                  <li>
                    Our Team conducts an in-depth analysis of your market,
                    competitors and opportunities.
                  </li>
                  <li>
                    A personalized consultation session helps us align our
                    solutions with your unique needs.
                  </li>
                </ul>
              </section>
            </motion.div>
            <motion.div
              variants={childrenVariant}
              className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full lg:space-y-6"
            >
              <h1 className="bg-action w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  rounded-full flex items-center justify-center">
                <span className="inline-block font-sans text-white text-xl xl:text-xl">
                  Step-2
                </span>
              </h1>
              <h1 className="text-2xl text-primary">Customization</h1>
              <section className="font-sans text-xl  p-3  ">
                <ul className="list-disc space-y-2 lg:space-y-6">
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
            </motion.div>{" "}
            <motion.div
              variants={childrenVariant}
              className="flex flex-col items-center justify-center min-w-md  space-y-4 p-8 h-full lg:space-y-6"
            >
              <h1 className="bg-action w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  rounded-full flex items-center justify-center">
                <span className="inline-block font-sans text-white text-xl xl:text-xl">
                  Step-3
                </span>
              </h1>
              <h1 className="text-2xl text-primary">Implementation</h1>
              <section className="font-sans text-xl  p-3  ">
                <ul className="list-disc space-y-2 lg:space-y-6">
                  <li>
                    We guide you step-by-step through implementation process.
                  </li>
                  <li>
                    Our team remains available for the ongoing support,
                    performance tracking and necessary adjustments.
                  </li>
                  <li>
                    Regualar reviews and update keep your business on a path to
                    success.
                  </li>
                </ul>
              </section>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Workprocess;

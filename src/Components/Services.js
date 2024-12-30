import Heading from "../UI/Heading";
import Swipe from "../Components/Swipe";
import { team } from "../Assets/asset";
import { motion } from "motion/react";
const Services = () => {
  return (
    <div id="services">
      <Heading name="Our Services" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          duration: 1.2,
          ease: [0.37, 0, 0.63, 1],
          delay: 0.4,
        }}
        className="mt-14 mx-auto w-full lg:w-[85%] xl:w-[75%]"
      >
        <Swipe />
      </motion.div>
      <div className="mt-20  w-[100%]  bg-white rounded-tl-[100px] rounded-br-[100px] shadow-sm ">
        <motion.div className="mx-auto w-[75%] lg:w-[100%] xl:w-[75%] ">
          <div className=" flex flex-col justify-center items-center space-x-0 space-y-4 lg:flex-row lg:justify-between lg:space-x-10 p-10">
            <motion.div
              initial={{ x: "-100px", opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "tween",
                duration: 1.2,
                ease: [0.37, 0, 0.63, 1],
              }}
              className="w-full h-full lg:w-1/2 lg:h-full  "
            >
              {team}
            </motion.div>
            <motion.div
              initial={{ x: "100px", opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "tween",
                duration: 1.2,
                ease: [0.37, 0, 0.63, 1],
              }}
              className="w-full h-full lg:w-1/2 lg:h-1/2  flex justify-center items-center"
            >
              <div className="flex flex-col items-center xl:items-start space-y-4 w-full xl:space-y-5">
                <h1 className="text-primary text-4xl underline underline-offset-8 decoration-action  ">
                  Join Us For:
                </h1>
                <ul className="  text-secondary list-decimal text-2xl space-y-3 ml-10 xl:space-y-5">
                  <li className="">
                    Start of Business:
                    <ul className="text-tertiary  list-disc text-xl ml-10   xl:space-y-2">
                      <li>Business Idea Valuations</li>
                      <li>Business Plan Development</li>
                      <li>Legal and Compliance setups</li>
                    </ul>
                  </li>
                  <li className="">
                    Continuation of Business:
                    <ul className="text-tertiary  list-disc text-xl ml-10 w-full   xl:space-y-2 ">
                      <li>Growth strategy implementation</li>
                      <li>Operational Excellence</li>
                      <li>Performance monitoring</li>
                      <li className="w-full">
                        Taxation, Legal and other supports
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    Closure of Business:
                    <ul className="text-tertiary  list-disc text-xl ml-10   xl:space-y-2">
                      <li>Merger Acquisition</li>
                      <li>Assets Valutation and liquidations</li>
                      <li>Legal and Compliance setups</li>
                      <li>Post Closure supports</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

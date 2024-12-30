import React from "react";
import {
  strategy,
  risk,
  financial,
  operation,
  advisory,
  brand,
  startup,
  market,
  feasibility,
} from "../Assets/asset";
import { motion } from "motion/react";

const Swipe = () => {
  const services = [
    {
      id: "startup",
      name: "startup consulting",
      imageLink: startup,
    },
    {
      id: "strategy",
      name: "business strategy development",
      imageLink: strategy,
    },
    {
      id: "risk",
      name: "business risk management",
      imageLink: risk,
    },
    {
      id: "financial",
      name: "financial projections",
      imageLink: financial,
    },
    {
      id: "market",
      name: "market analysis & research",
      imageLink: market,
    },
    {
      id: "feasibility",
      name: "market feasibility study",
      imageLink: feasibility,
    },
    {
      id: "operation",
      name: "operational optimizations",
      imageLink: operation,
    },
    {
      id: "branding",
      name: "branding & marketing solutions",
      imageLink: brand,
    },
    {
      id: "advisory",
      name: "advisory services",
      imageLink: advisory,
    },
    {
      id: "live",
      name: "live classes",
      imageLink: advisory,
    },
  ];
  return (
    <div
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.5 }}
      // transition={{
      //   type: "tween",
      //   duration: 1,
      //   ease: "easeInOut",
      //   delay: 0.4,
      // }}
      className=" mx-auto w-full md:w-[80%] lg:w-full  xl:w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-center p-3 shadow-xl rounded-lg   bg-secbg border cursor-pointer w-full h-60"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="inline-block bg-tint rounded-full p-2 ">
                {service.imageLink}
              </span>
              <span className="inline-block uppercase text-xl font-bold text-secondary text-center">
                {service.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Swipe;

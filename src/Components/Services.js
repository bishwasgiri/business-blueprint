// import React, { useState } from "react";
import Heading from "../UI/Heading";
import {
  audit,
  book,
  business,
  merger,
  tax,
  team,
  training,
} from "../Assets/asset";

const Services = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const services = [
    {
      id: "book",
      name: "book keeping",
      imageLink: book,
    },
    {
      id: "tax",
      name: "tax service",
      imageLink: tax,
    },
    {
      id: "training",
      name: "class & trainings",
      imageLink: training,
    },
    {
      id: "merger",
      name: "merger acquisition",
      imageLink: merger,
    },
    {
      id: "audit",
      name: "forensit audit",
      imageLink: audit,
    },
    {
      id: "advisory",
      name: "business advisory",
      imageLink: business,
    },
  ];
  return (
    <div className="mt-36 mx-auto w-[70%]">
      <Heading name="Our Services" />
      <div className="mt-20 flex flex-wrap  justify-between items-center  gap-3">
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              className={`w-[200px] h-[200px] border-1 rounded-md shadow-lg flex justify-center items-center p-1 cursor-pointer  ${
                index === 2 ? "bg-[#322788]" : "bg-auto"
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`${index === 2 ? "text-white" : "text-tertiary"}`}
                >
                  {service.imageLink}
                </div>
                <div
                  className={` uppercase font-semibold ${
                    index === 2 ? "text-white" : "text-tertiary"
                  }`}
                >
                  {service.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* company */}
      <div className="mt-20 flex">
        <div className="flex-1">{team}</div>
        <div className="flex-1 flex flex-col  justify-start items-start space-y-3">
          <h1 className="text-primary text-4xl ">Company Accounts</h1>
          <p className="text-tertiary opacity-50 font-sans text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            magnam minima accusamus ut fugiat blanditiis voluptas! Delectus sit
            ab accusantium sapiente. Corporis, mollitia debitis? Corrupti amet
            rerum doloribus alias cum.
          </p>
          <p className="text-tertiary opacity-50 font-sans text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            magnam minima accusamus ut fugiat blanditiis voluptas! Delectus sit
            ab accusantium sapiente. Corporis, mollitia debitis? Corrupti amet
            rerum doloribus alias cum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

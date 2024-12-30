import React from "react";
import { motion } from "motion/react";

const Heading = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "tween",
        duration: 1.2,
        ease: [0.37, 0, 0.63, 1],
      }}
      className="mx-auto mt-36 flex flex-col items-center justify-center space-y-3 "
    >
      <h1 className="text-4xl text-tertiary text-center lg:text-5xl">
        {props.name}
      </h1>
      <span className="w-28 h-1 rounded-sm bg-action"></span>
    </motion.div>
  );
};

export default Heading;

import React from "react";
import classes from "./heading.module.css";
import { motion } from "framer-motion";

const Heading = ({ heading }) => {
  return (
    <div className={classes.heading}>
      <h1>{heading}</h1>
      <motion.div
        className={classes.heading_circle}
        animate={{ y: [-6, 6] }}
        transition={{ duration: 2, yoyo: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Heading;

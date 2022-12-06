/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./whatIDo.module.css";
import { urlFor } from "../../client";
import { motion } from "framer-motion";

const WhatIDo = ({ whatIDo }) => {
  const childrenVariants = {
    visible: {
      x: [0, 20],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className={classes.whatido} whileHover='visible'>
      <motion.img
        variants={childrenVariants}
        src={urlFor(whatIDo.icon)}
        alt='icon-img'
      />
      <motion.h2 variants={childrenVariants}>{whatIDo.whatido}</motion.h2>
      <motion.p variants={childrenVariants}>{whatIDo.description}</motion.p>
    </motion.div>
  );
};

export default WhatIDo;

import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import { motion } from "framer-motion";

import { FixedBtn } from "../../component";
import { client } from "../../client";

import TextTransition, { presets } from "react-text-transition";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [personalDesc, setPersonalDesc] = useState([]);

  const homeContainerVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const childrenVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const scrollBtnVariants = {
    hidden: {
      y: -20,
      opacity: 1,
    },
    visible: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    const query = '*[_type == "me"]';
    client
      .fetch(query)
      .then((data) => {
        setPersonalDesc(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section id='home' className={classes.home}>
      {personalDesc.map((me, ind) => (
        <motion.div
          className={classes.home_content}
          key={me.name + ind}
          variants={homeContainerVariants}
          initial='hidden'
          whileInView='visible'
        >
          <motion.p variants={childrenVariants}>Hello there....</motion.p>
          <motion.h1 variants={childrenVariants}>{me.name}</motion.h1>
          <motion.h2 variants={childrenVariants}>
            <TextTransition springConfig={presets.wobbly}>
              {me.profession[index % me.profession.length]}
            </TextTransition>
          </motion.h2>
          <motion.p variants={childrenVariants}>{me.description}</motion.p>
          <motion.div variants={childrenVariants}>
            <button className={`btn ${classes.home_btn}`}>Download CV</button>
            <button className={`btn ${classes.home_btn_outlined}`}>
              My Work
            </button>
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        className={classes.home_arrow_btn}
        variants={scrollBtnVariants}
        initial='hidden'
        animate='visible'
      >
        <IoIosArrowDown />
      </motion.div>
      <FixedBtn />
    </section>
  );
};

export default Home;

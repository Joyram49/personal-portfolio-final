import React, { useEffect, useRef, useState } from "react";
import classes from "./skill.module.css";
import { motion } from "framer-motion";

const Skill = ({ skill, width }) => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  const progressBarVariant = {
    hidden: {
      width: 0,
    },
    visible: {
      width: `${width}%`,
      transition: {
        duration: 1.6,
      },
    },
  };
  const progressBarChild = {
    position: "absolute",
    width: `${progress}%`,
    height: 16,
    backgroundColor: "#ff9301",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    textAlign: "right",
    overflow: "hidden",
  };

  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      counter++;
      setProgress(counter);
      if (counter === width) {
        clearInterval(interval);
      }
    }, 20);
  }, [width]);

  return (
    <div className={classes.skill}>
      <h2>{skill}</h2>
      <div ref={progressBarRef} className={classes.progress_bar}>
        <motion.div
          style={progressBarChild}
          variants={progressBarVariant}
          initial='hidden'
          whileInView='visible'
        >
          <span
            ref={progressTextRef}
            className={classes.progress_text}
          >{`${progress}%`}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;

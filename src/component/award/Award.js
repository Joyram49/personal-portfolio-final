import React from "react";
import classes from "./award.module.css";
import { urlFor } from "../../client";
import { motion } from "framer-motion";

const Award = ({ award }) => {
  return (
    <motion.div
      className={classes.award}
      whileHover={{ y: [0, -10] }}
      transition={{ duration: 0.3 }}
    >
      <div className={classes.award_img}>
        <img src={urlFor(award.imageurl)} alt='award-img' />
      </div>
      <div className={classes.award_desc}>
        <h2>{award.award}</h2>
        <p>{award.award_sub}</p>
      </div>
    </motion.div>
  );
};

export default Award;

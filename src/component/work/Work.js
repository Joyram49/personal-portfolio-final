import React from "react";
import classes from "./work.module.css";
import { urlFor } from "../../client";
import { AiOutlineLink } from "react-icons/ai";
import { GrProjects } from "react-icons/go";

const Work = ({ work }) => {
  return (
    <div className={classes.work}>
      <div className={classes.work_img}>
        <img src={urlFor(work.imageurl)} alt='work-img' />
      </div>
    </div>
  );
};

export default Work;

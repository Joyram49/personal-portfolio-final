import React from "react";
import classes from "./experience.module.css";
import Pill from "../pill/Pill";

const Experience = ({ exp }) => {
  return (
    <div className={classes.exp}>
      <div className={classes.exp_left}>
        <h2>{exp.profession}</h2>
        <p className={classes.exp_job}>
          {exp.company}
          <span> / </span>Remote
        </p>
        <p className={classes.exp_time}>{exp.time}</p>
        <Pill text={exp.type} />
      </div>
      <div className={classes.exp_right}>
        <h1>{exp.company}</h1>
        <p>{exp.description}</p>
      </div>
    </div>
  );
};

export default Experience;

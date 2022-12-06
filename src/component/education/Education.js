import React from "react";
import classes from "./education.module.css";

const Education = ({ edu }) => {
  return (
    <div className={classes.education}>
      <p>{edu.time}</p>
      <h2>{edu.degree}</h2>
      <p>{edu.institution}</p>
    </div>
  );
};

export default Education;

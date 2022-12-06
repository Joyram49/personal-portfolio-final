import React from "react";
import classes from "./pill.module.css";

const Pill = ({ text }) => {
  return <button className={classes.pill}>{text}</button>;
};

export default Pill;

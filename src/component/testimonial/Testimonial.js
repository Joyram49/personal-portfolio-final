import React from "react";
import classes from "./testimonial.module.css";
import { urlFor } from "../../client";

const Testimonial = ({ testimonial }) => {
  return (
    <div className={classes.test}>
      <div className={classes.test_img}>
        <img src={urlFor(testimonial.imageurl)} alt='testimonial-img' />
      </div>
      <div className={classes.test_desc}>
        <p>{testimonial.description}</p>
        <h2>{testimonial.name}</h2>
        <h4>{testimonial.company}</h4>
      </div>
    </div>
  );
};

export default Testimonial;

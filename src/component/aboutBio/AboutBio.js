import React from "react";
import classes from "./aboutBio.module.css";
import { Heading } from "../index";

const AboutBio = ({ bio }) => {
  return (
    <div className={classes.about_bio}>
      <Heading heading='Biography' />
      <p>{bio}</p>
      <div className={classes.about_bio_person}>
        <div className={classes.about_bio_person_left}>
          <p>
            <span>Name:</span> Joy Ram Das
          </p>
          <p>
            <span>Birthday:</span>10th October 1994
          </p>
          <p>
            <span>Age:</span> 27 years
          </p>
          <p>
            <span>Address</span>Narsingdi&#44; Bangladesh
          </p>
        </div>
        <div className={classes.about_bio_person_right}>
          <p>
            <span>Phone:</span>(+88) 01716-191849
          </p>
          <p>
            <span>Email:</span>joyram2015@gmail.com
          </p>
          <p>
            <span>Skype:</span> live:joyram2015
          </p>
          <p>
            <span>Freelance</span>Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBio;

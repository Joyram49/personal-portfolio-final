import React from "react";
import classes from "./aboutImg.module.css";
import { urlFor } from "../../client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";

const AboutImg = ({ about }) => {
  return (
    <div className={classes.about_img}>
      <div className={classes.about_img_icons}>
        <img src={urlFor(about.imageurl)} alt='about-img' />
        <a
          href='https://www.facebook.com/jogga346'
          rel='noreferrer'
          target='_blank'
        >
          <FaFacebookF />
        </a>
        <a href='https://twitter.com/JoyramD' rel='noreferrer' target='_blank'>
          <FaTwitter />
        </a>
        <a
          href='https://www.instagram.com/joy.ram.794/'
          rel='noreferrer'
          target='_blank'
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.linkedin.com/in/joy-ram-das-a89893a2/'
          rel='noreferrer'
          target='_blank'
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://stackoverflow.com/users/13849216/joyram-das'
          rel='noreferrer'
          target='_blank'
        >
          <FaStackOverflow />
        </a>
      </div>
      <div className={classes.about_name}>
        <p>{about.profession}</p>
        <h2>{about.name}</h2>
      </div>
    </div>
  );
};

export default AboutImg;

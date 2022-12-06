import React from "react";
import classes from "./contactDetails.module.css";
import { MdLocationOn, MdPhoneIphone } from "react-icons/md";
import { BiEnvelopeOpen } from "react-icons/bi";

const contactDetails = () => {
  return (
    <div className={classes.details}>
      <h2>What’s your story? Get in touch</h2>
      <p>
        Always available for freelancing if the right project comes along, Feel
        free to contact me.
      </p>
      <div className={classes.details_address}>
        <div>
          <MdLocationOn />
          <p>123 Stree New York City , United States Of America 750065</p>
        </div>
        <div>
          <BiEnvelopeOpen />
          <p>support@domain.com</p>
        </div>
        <div>
          <MdPhoneIphone />
          <p>+084533984753</p>
        </div>
      </div>
    </div>
  );
};

export default contactDetails;

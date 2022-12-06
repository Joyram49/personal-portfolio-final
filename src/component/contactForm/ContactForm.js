import React from "react";
import classes from "./contactForm.module.css";

const ContactForm = ({ contactHeading }) => {
  return (
    <div className={classes.contact}>
      <h2 className={classes.contact_heading}>{contactHeading}</h2>
      <form className={classes.contact_form}>
        <div>
          <input type='text' placeholder='Full name' required />
          <input type='email' placeholder='Email Address' required />
        </div>
        <input type='text' placeholder='Subject' required />
        <textarea placeholder='Type comment' required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

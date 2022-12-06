import React from "react";
import classes from "./contact.module.css";
import { ContactDetails } from "../../component";
import { ContactForm } from "../../component";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear",
      staggerChildren: 0.4,
    },
  },
};

const topVariants = {
  hidden: {
    x: "-50px",
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear",
    },
  },
};

const bottomVariants = {
  hidden: {
    y: 50,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear",
    },
  },
};

const Contact = () => {
  return (
    <div id='contact' className={classes.contact}>
      <motion.div
        className={classes.contact_content}
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
      >
        <motion.div className={classes.contact_details} variants={topVariants}>
          <ContactDetails />
        </motion.div>
        <motion.div className={classes.contact_form} variants={topVariants}>
          <ContactForm contactHeading='Say Something' />
        </motion.div>
        <motion.iframe
          variants={bottomVariants}
          className={classes.google_maps}
          title='Google Maps'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.854229803045!2d90.67332741543277!3d23.859309490522886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375433ffafe553d9%3A0x6ed297408ecfee41!2sAnandi%20Rd%2C%20Madhabdi!5e0!3m2!1sen!2sbd!4v1670045536099!5m2!1sen!2sbd'
          frameBorder='0'
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></motion.iframe>
      </motion.div>
    </div>
  );
};

export default Contact;

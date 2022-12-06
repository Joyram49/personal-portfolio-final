import React from "react";
import classes from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_container}>
        <ul className={classes.footer_links}>
          <li>
            <a href='#'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaPinterestP />
            </a>
          </li>
        </ul>
        <p>
          &copy; 2022 copyright <a href='#'>RD-Joy </a> all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

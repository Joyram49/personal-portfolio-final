import React, { useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-scroll";

import { FaHome, FaBlog } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiBriefcase, FiPhoneOutgoing } from "react-icons/fi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div
        className={
          showNav
            ? `${classes.navbar} ${classes.show__nav}`
            : `${classes.navbar}`
        }
      >
        {showNav && console.log("navbar-show")}
        <div className={`${classes.navbar__brand} content__center`}>
          <a href='#home'>N</a>
        </div>
        <ul className={classes.nav__links}>
          <li>
            <Link
              activeClass={classes.activeNav}
              href='#home'
              className={`${classes.nav__link}`}
              spy
              to='home'
            >
              <FaHome />
              <span className={classes.nav__link_text}>home</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.activeNav}
              href='#about'
              className={`${classes.nav__link}`}
              spy
              to='about'
            >
              <BsPerson />
              <span className={classes.nav__link_text}>about</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.activeNav}
              href='#resume'
              className={`${classes.nav__link}`}
              spy
              to='resume'
            >
              <CgFileDocument />
              <span className={classes.nav__link_text}>resume</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.activeNav}
              href='#work'
              className={`${classes.nav__link}`}
              spy
              to='work'
            >
              <FiBriefcase />
              <span className={classes.nav__link_text}>work</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.activeNav}
              href='#blog'
              className={`${classes.nav__link}`}
              spy
              to='blog'
            >
              <FaBlog />
              <span className={classes.nav__link_text}>blog</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.activeNav}
              href='#contact'
              className={`${classes.nav__link}`}
              spy
              to='contact'
            >
              <FiPhoneOutgoing />
              <span className={classes.nav__link_text}>contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.mobile__nav}>
        <button
          className={
            showNav
              ? `${classes.toggle__menu} ${classes.toggle__hover}`
              : `${classes.toggle__menu}`
          }
          onClick={() => setShowNav(!showNav)}
        >
          <div className={showNav ? `${classes.active}` : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import classes from "./fixedBtn.module.css";
import { IoArrowUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const FixedBtn = () => {
  const [fixedBtnState, setfixedBtnState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setfixedBtnState(true);
      } else {
        setfixedBtnState(false);
      }
    });
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  return (
    <AnimatePresence>
      {fixedBtnState && (
        <motion.div
          className={classes.home_fixed_btn}
          onClick={scrollTop}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <IoArrowUp />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FixedBtn;

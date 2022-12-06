import React from "react";
import classes from "./workModal.module.css";
import { urlFor } from "../../client";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronDoubleRight } from "react-icons/hi";

const WorkModal = ({ setModal, tempWork }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={`${classes.modal} ${classes.open}`}
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        layout
      >
        <IoMdClose onClick={() => setModal(false)} />
        <div className={classes.modal_img}>
          <img src={urlFor(tempWork.imageurl)} alt='modal-img' />
        </div>
        <div className={classes.modal_content}>
          <h1>{tempWork.project}</h1>
          <p>{tempWork.description}</p>
          <h2>
            Tech used: <span>{tempWork.tech}</span>
          </h2>
          <div className={classes.links}>
            <button>
              <a href={tempWork.projectLink} target='_blank' rel='noreferrer'>
                Visit Site
              </a>
              <HiChevronDoubleRight />
            </button>
            <button>
              <a href={tempWork.codeLink} target='_blank' rel='noreferrer'>
                View Code
              </a>
              <HiChevronDoubleRight />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkModal;

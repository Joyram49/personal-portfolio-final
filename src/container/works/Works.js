import React, { useEffect, useState } from "react";
import classes from "./works.module.css";
import { client, urlFor } from "../../client";
import { Heading } from "../../component";
import { WorkModal } from "../../component";

import { motion } from "framer-motion";

const workCategory = ["all", "portfolio", "figma to html", "app", "bootstrap"];

const Works = () => {
  const [active, setActive] = useState("all");
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [modal, setModal] = useState(false);
  const [tempWork, setTempWork] = useState(null);

  // Get data from Database

  useEffect(() => {
    const query = '*[_type == "work"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // Handle Click Function

  const handleClick = (item) => {
    setActive(item);
    if (item === "all") {
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(item)));
    }
  };

  // Handle Modal Function
  const handleModal = (work) => {
    let selected = work;
    if (selected) {
      setTempWork(selected);
      setModal(true);
    }
  };

  return (
    <div id='work' className={classes.works}>
      <div className={classes.work_heading}>
        <Heading heading='My Works' />
      </div>

      {/* Works - works category */}
      <motion.div
        whileInView={{ x: [-20, 0], opacity: [0, 1] }}
        transition={{
          duration: 1,
          type: "linear",
          delayChildren: 0.3,
          staggerChildren: 0.3,
        }}
        className={classes.works_category}
      >
        {workCategory.map((item, index) => (
          <div
            key={index + item}
            onClick={() => handleClick(item)}
            className={
              active === item
                ? `${classes.work_item} ${classes.work_item_active}`
                : `${classes.work_item}`
            }
          >
            <h2>{item}</h2>
          </div>
        ))}
      </motion.div>

      {/* works - works container */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{
          staggerChildren: 0.2,
        }}
        className={
          active === "all"
            ? `${classes.work_content}`
            : `${classes.work_content_alt}`
        }
      >
        {filterWork.map((work, index) => (
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            key={work.project + index}
            className={classes.work}
            onClick={() => handleModal(work)}
          >
            <img src={urlFor(work.imageurl)} alt='img-content' />
          </motion.div>
        ))}
      </motion.div>

      {/* modal */}
      {modal && <WorkModal setModal={setModal} tempWork={tempWork} />}
    </div>
  );
};

export default Works;

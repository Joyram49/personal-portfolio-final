import React, { useEffect, useState } from "react";
import classes from "./resume.module.css";

import { client } from "../../client";
import { Heading } from "../../component";
import { Experience } from "../../component";
import { BorderImg } from "../../component";
import { Education } from "../../component";
import { Skill } from "../../component";

import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "ReactJS",
  "NodeJS",
  "ExpressJs",
  "MongoDB",
];
const progress = [96, 95, 90, 88, 80, 80, 75];

const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const parentContainer = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const childrenContainer = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => setExperiences(data));
  }, []);

  useEffect(() => {
    const query = '*[_type == "education"]';
    client.fetch(query).then((data) => setEducations(data));
  }, []);

  return (
    <div id='resume' className={classes.resume}>
      {/* Resume- Experiences */}
      <div className={classes.resume_experiences}>
        <Heading heading='Experience.' />
        <motion.div
          className={classes.experiences}
          variants={parentContainer}
          initial='hidden'
          whileInView='visible'
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.company + index} variants={childrenContainer}>
              <Experience exp={exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BorderImg />

      {/* Resume - Education & Skills */}
      <div className={classes.resume_educations}>
        <Heading heading='Education &amp; Skills' />
        <div className={classes.edu_skill_container}>
          <div className={classes.educations}>
            {educations.map((education, index) => (
              <div key={education.institution + index}>
                <Education edu={education} />
              </div>
            ))}
          </div>
          <div className={classes.skills}>
            {skills.map((skill, index) => (
              <div key={index + skill}>
                <Skill skill={skill} width={progress[index]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

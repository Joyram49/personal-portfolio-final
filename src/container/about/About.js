/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import classes from "./about.module.css";

import { client } from "../../client";

import { BorderImg } from "../../component";
import { AboutImg } from "../../component";
import { AboutBio } from "../../component";
import { WhatIDo } from "../../component";
import { Heading } from "../../component";
import { Award } from "../../component";
import { Testimonial } from "../../component";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [whatIDos, setWhatIDos] = useState([]);
  const [awards, setAwards] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const bioContainerVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4,
      },
    },
  };
  const bioChildren = {
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

  const containerVariants = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childrenVariants = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  useEffect(() => {
    const query = '*[_type == "whatIDo"]';
    client.fetch(query).then((data) => setWhatIDos(data));
  }, []);

  useEffect(() => {
    const query = '*[_type == "awards"]';
    client.fetch(query).then((data) => setAwards(data));
  }, []);
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  return (
    <div id='about' className={classes.about}>
      {/* About - Biography */}
      {abouts.map((about, index) => (
        <motion.div
          className={classes.about_bio}
          key={about.name + index}
          variants={bioContainerVariants}
          initial='hidden'
          whileInView='visible'
        >
          <motion.div variants={bioChildren}>
            <AboutImg about={about} />
          </motion.div>
          <motion.div variants={bioChildren}>
            <AboutBio bio={about.biography} />
          </motion.div>
        </motion.div>
      ))}

      <BorderImg />

      {/* About - What I Do */}
      <div className={classes.about_whatidos}>
        <Heading heading='What I Do?' />
        <motion.div
          className={classes.whatidos}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
        >
          {whatIDos.map((whatIDo, index) => (
            <motion.div
              key={whatIDo.whatido + index}
              variants={childrenVariants}
            >
              <WhatIDo whatIDo={whatIDo} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BorderImg />

      {/* About - Awards */}
      <div className={classes.about_awards}>
        <Heading heading='Awards.' />
        <motion.div
          className={classes.awards}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
        >
          {awards.map((award, index) => (
            <motion.div key={index + award.award} variants={childrenVariants}>
              <Award award={award} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BorderImg />
      <div className={classes.about_testimonials}>
        <Heading heading='Testimonials.' />

        <Swiper
          className={classes.testimonials}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;

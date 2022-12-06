import React, { useEffect, useRef } from "react";
import classes from "./blog.module.css";
import { Heading } from "../../component";
import { useState } from "react";
import { client } from "../../client";
import { urlFor } from "../../client";
import { motion } from "framer-motion";
import { Article } from "../../component";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "tween",
      staggerChildren: 0.5,
    },
  },
};

const blogVariants = {
  hidden: {
    x: -100,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const blogImgVariants = {
  initial: {
    scale: 1,
    filter: "grayscale(0)",
  },
  hover: {
    scale: 1.1,
    filter: "grayscale(100%)",
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "linear",
    },
  },
};

const headingVariants = {
  initial: {
    textDecoration: "none",
    textUnderlineOffset: 0,
  },
  hover: {
    textDecoration: "underline",
    textUnderlineOffset: 6,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "linear",
      when: "afterChildren",
    },
  },
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState({});
  const [isHovered, setIsHovered] = useState(-1);
  const [articleOpen, setArticleOpen] = useState(false);
  const articleRef = useRef(null);

  const handleArticleOpen = (blog) => {
    setArticleOpen(true);
    setSingleBlog(blog);
  };

  useEffect(() => {
    let handleOutsideClick = (e) => {
      if (articleOpen && e.target === articleRef.current) {
        setArticleOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [articleOpen]);

  useEffect(() => {
    const query = '*[_type == "blog"]';
    client.fetch(query).then((data) => setBlogs(data));
  }, []);

  return (
    <div id='blog' className={classes.blogs}>
      <div className={classes.blogs_container}>
        <div className={classes.blog_heading}>
          <Heading heading='Latest Blogs' />
        </div>
        <motion.div
          className={classes.blog_content}
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
        >
          {blogs.map((blog, index) => (
            <motion.div
              className={classes.blog}
              key={blog.name + index}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}
              onClick={() => handleArticleOpen(blog)}
              variants={blogVariants}
            >
              <div className={classes.blog_img}>
                <motion.img
                  src={urlFor(blog.imageurl)}
                  alt='blog_image'
                  variants={blogImgVariants}
                  animate={isHovered === index ? "hover" : "initial"}
                />
              </div>
              <div className={classes.blog_timeAuthor}>
                <p>
                  {blog.time} - {blog.name}
                </p>
              </div>
              <motion.h2
                className={classes.blog_heading}
                variants={headingVariants}
                animate={isHovered === index ? "hover" : "initial"}
              >
                {blog.heading}
              </motion.h2>
            </motion.div>
          ))}
        </motion.div>
        {articleOpen && (
          <div className={classes.blog_article} ref={articleRef}>
            <Article
              article={singleBlog}
              articleOpen={articleOpen}
              setArticleOpen={setArticleOpen}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

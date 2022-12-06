import React from "react";
import classes from "./article.module.css";
import { CgClose } from "react-icons/cg";
import { urlFor } from "../../client";
import { ContactForm } from "../index";

const Article = ({ article, articleOpen, setArticleOpen }) => {
  const handleArticleClose = (e) => {
    setArticleOpen(false);
  };
  return (
    <div className={classes.article}>
      <div className={classes.closeIcon} onClick={handleArticleClose}>
        <CgClose size={20} />
      </div>
      <div className={classes.article_content}>
        <div className={classes.article_img}>
          <img src={urlFor(article.imageurl)} alt='article_img' />
        </div>
        <h2 className={classes.article_heading}>{article.heading}</h2>
        <div className={classes.article_author}>
          <div className={classes.article_author_img}>
            <img src={urlFor(article.imageurl2)} alt='author_image' />
          </div>
          <div className={classes.article_author_info}>
            <h2>{article.name}</h2>
            <p>{article.time} </p>
          </div>
        </div>
        <div className={classes.article_desc}>
          <p>{article.description1}</p>
          <p>{article.description2}</p>
          <h2>{article.question}</h2>
          <p>{article.answer}</p>
          <div className={classes.article_desc_quote}>
            <p>{article.cite}</p>
            <p>{article.citeName}</p>
          </div>
          <p>{article.description2}</p>
        </div>
        <ul className={classes.article_tags}>
          {article.tags.map((tag, index) => (
            <li key={tag + index} className={classes.article_tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div>
          <ContactForm contactHeading='Leave a Reply' />
        </div>
      </div>
    </div>
  );
};

export default Article;

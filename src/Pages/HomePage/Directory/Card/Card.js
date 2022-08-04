import React from "react";
import classes from "./Card.module.scss";

const Card = ({ category }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.content_paragraph}>{category}</p>
        <small className={classes.content_small}>SHOP NOW</small>
      </div>
    </div>
  );
};

export default Card;

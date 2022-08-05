import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Card.module.scss";

const Card = ({ title, imageUrl, linkUrl, size, history, match }) => {
  console.log(match);
  return (
    <div
      className={`${classes[size] ? classes[size] : ""} ${classes.container}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className={classes.container_image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={classes.content}>
        <p className={classes.content_paragraph}>{title}</p>
        <small className={classes.content_small}>SHOP NOW</small>
      </div>
    </div>
  );
};

export default withRouter(Card);

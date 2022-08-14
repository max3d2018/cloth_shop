import React from "react";
import classes from "./CollectionItem.module.scss";
const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className={classes.Element}>
      <div
        className={classes.Element__Image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={classes.Element__Footer}>
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CollectionItem;

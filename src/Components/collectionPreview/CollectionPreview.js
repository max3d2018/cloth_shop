import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import classes from "./CollectionPreview.module.scss";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className={classes.Collection}>
      <h2 className={classes.Collection__Heading}>{title}</h2>
      <div className={classes.Collection__Items}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;

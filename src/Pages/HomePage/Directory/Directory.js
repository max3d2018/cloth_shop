import React from "react";
import Card from "./Card/Card";
import classes from "./Directory.module.scss";
const Directory = ({ categories }) => {
  return (
    <div className={classes.container}>
      {categories.map((category) => (
        <Card key={category} category={category} />
      ))}
    </div>
  );
};

export default Directory;

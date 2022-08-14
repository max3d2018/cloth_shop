import React from "react";
import classes from "./CustomBtn.module.scss";

const CustomBtn = ({ children, type, className, handleOnClick }) => {
  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={`${classes.Button} ${classes[className]}`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;

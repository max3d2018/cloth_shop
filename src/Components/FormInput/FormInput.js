import React from "react";
import classes from "./FormInput.module.scss";

const FormInput = ({ type, label, placeholder, change, name, value }) => {
  return (
    <div className={classes.Input}>
      <input
        className={classes.Input__Input}
        type={type}
        name={name}
        value={value}
        onChange={change}
      />
      {label ? (
        <label
          className={classes.Input__Label}
          style={{ top: value ? "-14px" : null }}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

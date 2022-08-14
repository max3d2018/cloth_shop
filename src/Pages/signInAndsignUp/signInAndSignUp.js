import React from "react";
import SignIn from "./SignIn/SignIn";
import classes from "./signInAndSignUp.module.scss";
import SignUp from "./SignUp/SignUp";
const signInAndSignUp = () => {
  return (
    <div className={classes.Container}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default signInAndSignUp;

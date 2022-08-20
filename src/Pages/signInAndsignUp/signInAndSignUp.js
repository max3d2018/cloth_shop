import React from "react";
import { connect } from "react-redux/es/exports";
import SignIn from "./SignIn/SignIn";
import classes from "./signInAndSignUp.module.scss";
import SignUp from "./SignUp/SignUp";
import { selectCurrentUser } from "../../redux/user/users.selectors";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router-dom";

const signInAndSignUp = ({ user }) => {
  if (user) return <Redirect to="/" />;

  return (
    <div className={classes.Container}>
      <SignIn />
      <SignUp />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ user: selectCurrentUser });

export default connect(mapStateToProps)(signInAndSignUp);

import React, { Component } from "react";
import classes from "./SignUp.module.scss";
import FormInput from "../../../Components/FormInput/FormInput";
import CustomBtn from "../../../Components/CustomBtn/CustomBtn";
import { auth, signWithEmail } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import { signUpStart } from "../../../redux/user/userActions";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    const { dispatch } = this.props;
    const { email, password, confirmPassword, displayName } = this.state;
    e.preventDefault();
    if (!password && !confirmPassword) return;
    if (password !== confirmPassword) {
      alert("Password and Confirm Password don't match");
      return;
    }

    dispatch(signUpStart({ email, password, displayName }));

    this.setState({
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  componentDidMount() {}

  render() {
    return (
      <div className={classes.SignUpPage}>
        <h1>I Do Not Have An Account</h1>
        <h2>Sign up with your Email and Password</h2>
        <form className={classes.Form} onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            placeholder="Name"
            name="displayName"
            change={this.handleChange}
            value={this.state.displayName}
            label="Name"
          />
          <FormInput
            type="email"
            placeholder="Email"
            name="email"
            change={this.handleChange}
            value={this.state.email}
            label="Email"
          />
          <FormInput
            type="password"
            placeholder="Password"
            name="password"
            change={this.handleChange}
            value={this.state.password}
            label="Password"
          />
          <FormInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            change={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm Password"
          />
          <div className={classes.Btns}>
            <CustomBtn type="submit" className="White">
              Sign Up
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(SignUp);

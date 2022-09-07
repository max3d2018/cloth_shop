import React, { Component } from "react";
import CustomBtn from "../../../Components/CustomBtn/CustomBtn";
import FormInput from "../../../Components/FormInput/FormInput";
import classes from "./SignIn.module.scss";
import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../redux/user/userActions";
import { connect } from "react-redux";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    e.preventDefault();
    dispatch(emailSignInStart(email, password));

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  componentDidMount() {}

  render() {
    const { dispatch } = this.props;
    return (
      <div className={classes.SignInPage}>
        <h1>I Already have an Account</h1>
        <h2>Sign in with your Email and Password</h2>
        <form className={classes.Form} onSubmit={this.handleSubmit}>
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
          <div className={classes.Btns}>
            <CustomBtn type="submit" className="White">
              Sign In
            </CustomBtn>
          </div>
        </form>
        <CustomBtn
          className="BlueGoogle"
          handleOnClick={() => dispatch(googleSignInStart())}
        >
          Sign In With GOOGLE
        </CustomBtn>
      </div>
    );
  }
}

export default connect()(SignIn);

import React, { Component } from "react";
import Directory from "./Directory/Directory";
import classes from "./HomePage.module.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <Directory categories={this.state.categories} />
      </div>
    );
  }
}

export default HomePage;

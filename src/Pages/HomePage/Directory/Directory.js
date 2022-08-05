import React, { Component } from "react";
import Card from "./Card/Card";
import classes from "./Directory.module.scss";
import { sections } from "./directory.data";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections,
    };
  }

  render() {
    return (
      <div className={classes.container}>
        {this.state.sections.map(({ id, ...otherParts }) => (
          <Card key={id} {...otherParts} />
        ))}
      </div>
    );
  }
}

export default Directory;

import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card/Card";
import classes from "./Directory.module.scss";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../../redux/directory/directory.selectors";

class Directory extends Component {
  render() {
    return (
      <div className={classes.container}>
        {this.props.sections.map(({ id, ...otherParts }) => (
          <Card key={id} {...otherParts} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ sections: selectSections });

export default connect(mapStateToProps)(Directory);

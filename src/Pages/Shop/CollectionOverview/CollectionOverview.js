import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../../Components/collectionPreview/CollectionPreview";
import { convertDataToArr } from "../../../redux/shop/shop.selectors";
import classes from "./CollectionOverview.module.scss";

class CollectionOverview extends Component {
  render() {
    return (
      <div className={classes.Page}>
        <h1 className={classes.ShopPage__Heading}>Collections</h1>
        <div className={classes.ShopPage__Items}>
          {this.props.shopData.map(({ id, ...otherParts }) => {
            return <CollectionPreview key={id} {...otherParts} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shopData: convertDataToArr,
});

export default connect(mapStateToProps)(CollectionOverview);

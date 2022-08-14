import React, { Component } from "react";
import classes from "./Shop.module.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "./collectionPreview/CollectionPreview";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = { SHOP_DATA };
  }

  render() {
    return (
      <div className={classes.ShopPage}>
        <h1 className={classes.ShopPage__Heading}>Collections</h1>
        <div className={classes.ShopPage__Items}>
          {SHOP_DATA.map(({ id, ...otherParts }) => {
            return <CollectionPreview key={id} {...otherParts} />;
          })}
        </div>
      </div>
    );
  }
}

export default Shop;

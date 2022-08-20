import React, { Component } from "react";
import { Route } from "react-router-dom";
import Collection from "../../Components/Collection/Collection";
import CollectionOverview from "./CollectionOverview/CollectionOverview";
import classes from "./Shop.module.scss";

const Shop = ({ match }) => {
  return (
    <div className={classes.ShopPage}>
      <Route path={match.path} exact component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionId`}
        exact
        component={Collection}
      />
    </div>
  );
};

export default Shop;

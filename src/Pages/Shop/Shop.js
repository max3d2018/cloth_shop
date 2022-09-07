import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionContainer from "../../Components/Collection/Collection.container";
import classes from "./Shop.module.scss";
import { fetchCollectioStart } from "../../redux/shop/shop.sagas";
import CollectionOverviewContainer from "./CollectionOverview/CollectionOverview.container";
import { connect } from "react-redux";

class Shop extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_COLLECTION_START" });
  }
  render() {
    const { match } = this.props;
    return (
      <div className={classes.ShopPage}>
        <Route
          path={match.path}
          exact
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          exact
          component={CollectionContainer}
        />
      </div>
    );
  }
}

export default connect()(Shop);

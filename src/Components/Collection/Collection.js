import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../CollectionItem/CollectionItem";
import classes from "./Collection.module.scss";
import { selectCorrectData } from "../../redux/shop/shop.selectors";

const Collection = ({ data }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Container__Items}>
        {data.items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { data: selectCorrectData(ownProps.match.params.collectionId)(state) };
};

export default connect(mapStateToProps)(Collection);

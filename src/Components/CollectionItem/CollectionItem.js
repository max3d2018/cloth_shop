import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import CustomBtn from "../CustomBtn/CustomBtn";
import classes from "./CollectionItem.module.scss";
import { addItem } from "../../redux/cart/cartActions";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={classes.Element}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={classes.Element__Image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={classes.Element__Footer}>
        <p>{name}</p>
        <p>${price}</p>
      </div>
      {hovered ? (
        <CustomBtn
          className="CollectionItem"
          handleOnClick={() => addItem(item)}
        >
          ADD TO CART
        </CustomBtn>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from "react";
import classes from "./CheckoutItem.module.scss";
import {
  removeItem,
  addItem,
  decreaseItem,
} from "../../redux/cart/cartActions";
import { connect } from "react-redux";

const CheckoutItem = ({ item, dispatch }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <div className={classes.Container}>
      <img className={classes.Image} src={imageUrl} alt={name} />
      <span>{name}</span>
      <div className={classes.QuantityBox}>
        <span
          className={classes.Arrow}
          onClick={() => dispatch(decreaseItem(item))}
        >
          &#10094;
        </span>
        <span>{quantity}</span>
        <span className={classes.Arrow} onClick={() => dispatch(addItem(item))}>
          &#10095;
        </span>
      </div>
      <span>{quantity * price}</span>
      <span
        className={classes.RemoveBtn}
        onClick={() => dispatch(removeItem(item))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default connect()(CheckoutItem);

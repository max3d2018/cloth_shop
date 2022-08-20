import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = ({ imageUrl, price, quantity, name }) => {
  return (
    <div className={classes.CartItem}>
      <img className={classes.CartItem__image} src={imageUrl} alt={name} />
      <div className={classes.CartItem__name}>{name}</div>
      <div className={classes.CartItem__quantity}>
        {quantity} x {price}
      </div>
    </div>
  );
};

export default CartItem;

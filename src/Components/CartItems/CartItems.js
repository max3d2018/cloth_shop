import React, { Component } from "react";
import classes from "./CartItems.module.scss";
import CustomBtn from "../CustomBtn/CustomBtn";
class CartItems extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Items}>Items</div>
        <CustomBtn className="White">GO TO CHECKOUT</CustomBtn>
      </div>
    );
  }
}

export default CartItems;

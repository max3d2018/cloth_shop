import React from "react";
import classes from "./Cart.module.scss";
import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartItems } from "../../redux/cart/cartActions";

const Cart = ({ toggleItems }) => {
  return (
    <div className={classes.Container} onClick={() => toggleItems()}>
      <Logo className={classes.Logo} />
      <span className={classes.ItemsNum}>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleItems: () => dispatch(toggleCartItems()),
  };
};

export default connect(null, mapDispatchToProps)(Cart);

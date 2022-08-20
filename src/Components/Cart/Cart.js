import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import classes from "./Cart.module.scss";
import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";
import { toggleCartItems } from "../../redux/cart/cartActions";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

const Cart = ({ toggleItems, cartItemsCount }) => {
  return (
    <div className={classes.Container} onClick={() => toggleItems()}>
      <Logo className={classes.Logo} />
      <span className={classes.ItemsNum}>{cartItemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleItems: () => dispatch(toggleCartItems()),
  };
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

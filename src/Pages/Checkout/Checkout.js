import React from "react";
import { Component } from "react";
import { connect } from "react-redux/es/exports";
import { createStructuredSelector } from "reselect";
import classes from "./Checkout.module.scss";
import { selectTotalPrice } from "../../redux/cart/cart.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import StripeCheckout from "../../Components/StripeCheckout/StripeCheckout";

class Checkout extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Descriptions}>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>

        <div className={classes.Items}>
          {this.props.cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </div>

        <div className={classes.Total}>TOTAL : ${this.props.totalPrice}</div>
        <StripeCheckout price={this.props.totalPrice} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  totalPrice: selectTotalPrice,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);

import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import classes from "./CartItems.module.scss";
import CustomBtn from "../CustomBtn/CustomBtn";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartItems } from "../../redux/cart/cartActions";
import { useEffect } from "react";
import { useRef } from "react";

const useClickedOutside = (ref, closeFn) => {
  useEffect(() => {
    const clickedOutside = (e) => {
      try {
        if (ref && !ref.current.contains(e.target)) {
          closeFn(toggleCartItems());
        }
      } catch (err) {}
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("click", clickedOutside);
    };
  }, [ref]);
};

const CartItems = ({ cartItems, history, dispatch }) => {
  const wrapper = useRef(null);

  useClickedOutside(wrapper, dispatch);

  return (
    <div className={classes.Container} ref={wrapper}>
      <div className={classes.Items}>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem {...item} />;
          })
        ) : (
          <span className={classes.EmptyMessage}>Your Cart Is Empty</span>
        )}
      </div>
      <CustomBtn
        className="White"
        handleOnClick={() => {
          history.push("/checkout");
          dispatch(toggleCartItems());
        }}
      >
        GO TO CHECKOUT
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartItems));

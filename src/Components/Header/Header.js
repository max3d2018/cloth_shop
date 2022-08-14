import React from "react";
import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import Cart from "../Cart/Cart";
import { connect } from "react-redux/es/exports";
import CartItems from "../CartItems/CartItems";

const Header = ({ user, cartItemsState }) => {
  const signOutHandler = () => {
    auth.signOut();
  };

  return (
    <div className={classes.Header}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={classes.Header__Links}>
        <Link className={classes.Header__Link} to="/shop">
          SHOP
        </Link>
        <Link className={classes.Header__Link}>CONTACT</Link>
        {user ? (
          <Link className={classes.Header__Link} onClick={signOutHandler}>
            SIGN OUT
          </Link>
        ) : (
          <Link to="signin" className={classes.Header__Link}>
            SIGN IN
          </Link>
        )}
        <Cart />
        {cartItemsState ? null : <CartItems />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => {
  return {
    cartItemsState: hidden,
  };
};

export default connect(mapStateToProps)(Header);

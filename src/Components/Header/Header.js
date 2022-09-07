import React from "react";
import { createStructuredSelector } from "reselect";
import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import Cart from "../Cart/Cart";
import { connect } from "react-redux/es/exports";
import CartItems from "../CartItems/CartItems";
import { selectCartState } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/users.selectors";
import { signOutStart } from "../../redux/user/userActions";

const Header = ({ user, cartItemsState, dispatch }) => {
  const signOutHandler = () => {
    dispatch(signOutStart());
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

const mapStateToProps = createStructuredSelector({
  cartItemsState: selectCartState,
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);

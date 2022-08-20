import { createSelector } from "reselect";
// there are two types of Selectors =>
// 1- Input Selectors => returns piece of the state
// 2- output Selectors => uses CreateSelector and input Selectors to return pieces of state in a Memoized Way

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectCartState = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  }
);

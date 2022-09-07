import { cartTypes } from "./cartTypes";

export const toggleCartItems = () => {
  return {
    type: cartTypes.TOGGLE_CART_ITEMS,
  };
};

export const addItem = (item) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: cartTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const decreaseItem = (item) => {
  return {
    type: cartTypes.DECREASE_ITEM,
    payload: item,
  };
};

export const clearCart = () => ({ type: cartTypes.CLEAR_CART });

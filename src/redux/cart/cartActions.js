import { cartTypes } from "./cartTypes";

export const toggleCartItems = () => {
  return {
    type: cartTypes.TOGGLE_CART_ITEMS,
  };
};

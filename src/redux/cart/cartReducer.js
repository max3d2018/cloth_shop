import { cartTypes } from "./cartTypes";
import { addItemToCartItem, decreaseItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_ITEMS:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartItem(state.cartItems, action.payload),
      };

    case cartTypes.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    case cartTypes.DECREASE_ITEM: {
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;

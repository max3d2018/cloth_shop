export const addItemToCartItem = (cartItems, cartItem) => {
  // determine whether the item already exists or not
  const exists = cartItems.find((item) => item.id === cartItem.id);

  if (exists) {
    // now we have to add a new property named quantity to our obj and add to it

    return cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  }

  return [...cartItems, { ...cartItem, quantity: 1 }];
};

export const decreaseItem = (cartItems, cartItem) => {
  const doesExist = cartItems.find((item) => item.id === cartItem.id);

  if (doesExist.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItem.id);
  }

  return cartItems.map((item) => {
    if (item.id === cartItem.id) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
};

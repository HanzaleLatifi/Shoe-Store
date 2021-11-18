const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const foundIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex < 0) {
        //notfound
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[foundIndex] };
        updatedItem.quantity++;
        updatedCart[foundIndex] = updatedItem;
      }

      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price,
      };
    }
    case "DEC_PRODUCT": {
      const updatedCart = [...state.cart];
      const foundIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[foundIndex] };

      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[foundIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.price,
        };
      }
    }

    default:
      return state;
  }
};

export default cartReducer;

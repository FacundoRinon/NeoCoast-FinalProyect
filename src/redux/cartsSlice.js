import { createSlice } from '@reduxjs/toolkit';

const cartsSlice = createSlice({
  name: 'carts',
  initialState: null,
  reducers: {
    setCarts(state, action) {
      return action.payload;
    },

    addToCart: (state, action) => {
      const { updatedCart } = action.payload;
      const existingCartIndex = state.findIndex(
        (cart) => cart.id === updatedCart.id,
      );
      if (existingCartIndex !== -1) {
        state[existingCartIndex] = updatedCart;
      } else {
        state.push(updatedCart);
      }
    },
    deleteFromCart: (state, action) => {
      const { updatedCart } = action.payload;
      const cartIndex = state.findIndex(
        (cart) => cart.id === updatedCart.id,
      );
      state[cartIndex] = updatedCart;
    },
    buyCart(state, action) {
      const { userId, cartId } = action.payload;
      const updatedCarts = state.map((cart) =>
        cart.userId === parseInt(userId) && cart.id === cartId
          ? { ...cart, products: [] }
          : cart,
      );
      return updatedCarts;
    },
  },
});

const { actions, reducer } = cartsSlice;
export const { setCarts, addToCart, deleteFromCart, buyCart } =
  actions;
export default reducer;

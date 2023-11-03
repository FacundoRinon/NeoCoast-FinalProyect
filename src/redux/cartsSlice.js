import { createSlice } from '@reduxjs/toolkit';

const cartsSlice = createSlice({
  name: 'carts',
  initialState: null,
  reducers: {
    setCarts(state, action) {
      return action.payload;
    },
    addToCart(state, action) {
      const { id, userId } = action.payload;

      const updatedCarts = [...state];

      const userCartIndex = updatedCarts.findIndex(
        (cart) => cart.id === userId,
      );

      if (userCartIndex !== -1) {
        const updatedUserCart = { ...updatedCarts[userCartIndex] };

        const existingProductIndex =
          updatedUserCart.products.findIndex(
            (product) => product.productId === parseInt(id),
          );

        if (existingProductIndex !== -1) {
          const updatedProduct = {
            ...updatedUserCart.products[existingProductIndex],
            quantity:
              updatedUserCart.products[existingProductIndex]
                .quantity + 1,
          };

          updatedUserCart.products = [
            ...updatedUserCart.products.slice(
              0,
              existingProductIndex,
            ),
            updatedProduct,
            ...updatedUserCart.products.slice(
              existingProductIndex + 1,
            ),
          ];

          updatedCarts[userCartIndex] = updatedUserCart;
        } else {
          updatedUserCart.products = [
            ...updatedUserCart.products,
            {
              productId: parseInt(id),
              quantity: 1,
            },
          ];

          updatedCarts[userCartIndex] = updatedUserCart;
        }
      } else {
        console.log('There is no cart');
      }

      return updatedCarts;
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
export const { setCarts, addToCart, buyCart } = actions;
export default reducer;

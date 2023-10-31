import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      const { user, cart } = action.payload;
      const updatedUser = {
        ...user,
        cart: cart.products,
      };
      return updatedUser;
    },
    removeUser(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser, removeUser } = actions;
export default reducer;

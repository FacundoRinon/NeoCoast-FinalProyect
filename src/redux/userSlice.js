import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      const { user } = action.payload;
      const updatedUser = {
        ...user,
        activeCart: 0,
      };
      return updatedUser;
    },
    removeUser(state, action) {
      return null;
    },
    setActiveCart(state, action) {
      const { cartPage } = action.payload;
      const updatedUser = {
        ...state,
        activeCart: cartPage,
      };
      return updatedUser;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser, removeUser, setActiveCart } = actions;
export default reducer;

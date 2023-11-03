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
  },
});

const { actions, reducer } = userSlice;
export const { setUser, removeUser } = actions;
export default reducer;

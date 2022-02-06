import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: false,
  },

  reducers: {
    register: (state, action) => {
      return { ...state, user: action.payload };
    },
    login: (state, action) => {
      return { ...state, user: action.payload };
    },
    loggout: (state) => {
      return { ...state, user: false };
    },
  },
});

export const { register, login, loggout } = slice.actions;

export const selectUser = (state) => state.user.user;

export default slice.reducer;

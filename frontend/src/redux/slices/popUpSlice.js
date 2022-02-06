import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'popUp',
  initialState: {
    sidebar: false,
  },

  reducers: {
    openSidebar: (state) => {
      return { ...state, sidebar: true };
    },
    closeSidebar: (state) => {
      return { ...state, sidebar: false };
    },
  },
});

export const { openSidebar, closeSidebar } = slice.actions;

export const selectSidebar = (state) => state.popUp.sidebar;

export default slice.reducer;

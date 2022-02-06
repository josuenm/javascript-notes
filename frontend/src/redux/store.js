import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import popUpReducer from './slices/popUpSlice';
import notesReducer from './slices/notesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    popUp: popUpReducer,
    notes: notesReducer,
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    currentNote: { title: '', body: '', id: '' },
  },

  reducers: {
    updateNotes: (state, action) => {
      return { ...state, notes: action.payload };
    },
    currentNote: (state, action) => {
      return { ...state, currentNote: action.payload };
    },
    clearCurrentNote: (state) => {
      return { ...state, currentNote: { title: '', body: '', id: '' } };
    },
  },
});

export const { currentNote, clearCurrentNote, updateNotes } = slice.actions;

export const selectCurrentNote = (state) => state.notes.currentNote;

export const selectNotes = (state) => state.notes.notes;

export default slice.reducer;

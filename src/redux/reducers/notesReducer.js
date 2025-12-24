import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    { text: " This is fist note", createdOn: new Date().toDateString() },
    { text: " This is second note", createdOn: new Date().toDateString() },
  ],
};

// Redux toolkit reducer
const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    // add action creator
    add: (state, action) => {
      state.notes.push({ text: action.payload, createdOn: new Date().toDateString() });
    },
    //delete action creator
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const notesReducer = notesSlice.reducer;
export const notesAction = notesSlice.actions
export const notesSelector = (state)=> state.notesReducer.notes


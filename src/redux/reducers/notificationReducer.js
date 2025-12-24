import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";
import { notesAction } from "./notesReducer";

const initailState = { message: "" };

const notificationSlice = createSlice({
  name: "notification",
  initialState: initailState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  // 1st way - old method for extrareducer , not recommended
  //   extraReducers: {
  //     "todo/add": (state, action) => {
  //       state.message = "Todo is created";
  //     },
  //     "notes/add": (state, action) => {
  //       state.message = "Notes is created";
  //     },
  //   },

  // 2nd way - recommended way and new way to create extra reducers
  //   extraReducers: (builder) => {
  //     builder.addCase(todoActions.add, (state, action) => {
  //       state.message = "Todo is created";
  //     });
  //     builder.addCase(notesAction.add, (state, action) => {
  //       state.message = "Notes is created";
  //     });
  //   },

  //3rd way - to create extrareducer is map
  // either use 2nd way aur 3rd way both are recommended
  extraReducers: {
    [todoActions.add]: (state, action) => {
      state.message = "Todo is created";
    },
    [notesAction.add]: (state, action) => {
      state.message = "Notes is created";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
export const notificationSelector = (state) => state.notificationReducer;

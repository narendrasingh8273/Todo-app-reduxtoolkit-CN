import { todoReducer } from "./reducers/todoReducer";
import { notesReducer } from "./reducers/notesReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";

// store configure using redux toolkit
export const store = configureStore({
  reducer: { todoReducer, notesReducer, notificationReducer },
});

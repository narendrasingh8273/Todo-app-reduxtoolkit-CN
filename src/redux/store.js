import { todoReducer } from "./reducers/todoReducer";
import { notesReducer } from "./reducers/notesReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// store configure using redux toolkit
export const store = configureStore({
  reducer: { todoReducer, notesReducer, notificationReducer },
  // This is depricated
  // middleware: [...getDefaultMiddleware(),loggerMiddleware],
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loggerMiddleware);
  },
});

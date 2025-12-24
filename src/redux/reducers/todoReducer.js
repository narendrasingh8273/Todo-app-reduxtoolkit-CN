import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};
// Redux toolkit reducer

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    //This is add action
    add: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },

    //Toggle action
    toggle: (state, action) => {
      state.todos.map((e, index) => {
        if (index === action.payload) {
          e.completed = !e.completed;
        }
        return e;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions
export const todoSelector = (state)=> state.todoReducer.todos

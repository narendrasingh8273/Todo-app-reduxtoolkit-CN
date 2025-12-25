import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
};

// redux thunk to handle ascyncronous datas
export const getInitialState = createAsyncThunk("todo/fetchData", async () => {
  try {
    const response = await axios.get("http://localhost:4100/api/todos");
    // console.log(response, "response fetched");
    return response.data;
  } catch (e) {
    console.log(e, "error");
  }
});

export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (payload) => {
    try {
      const response = await axios.post("http://localhost:4100/api/todos", {
        text: payload,
        completed: false,
      });
      console.log(response, "data added");
      return response.data;
    } catch (e) {
      console.log(e, "error");
    }
  }
);

// Redux toolkit reducer
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    //setinitial state
    // setInitailState: (state, action) => {
    //   state.todos = [...action.payload];
    // },
    //This is add action
    // add: (state, action) => {
    //   state.todos.push({ text: action.payload, completed: false });
    // },

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
  extraReducers: (builder) => {
    builder.addCase(getInitialState.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;

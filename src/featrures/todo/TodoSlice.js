import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        name: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (item) => item?.id !== action.payload.id
      );
    },
    updateTodo: (state, action) => {
      const existingTodo = state.todos.find(
        (item) => item?.id === action.payload.id
      );
      if (existingTodo) {
        existingTodo.name = action.payload.name;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

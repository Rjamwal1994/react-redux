import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../featrures/todo/TodoSlice";

export const store = configureStore({
  reducer: todoSlice,
});

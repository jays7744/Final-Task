import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

console.log(todoSlice.actions);
export default todoSlice.reducer;
export const { addUser, removeTodo } = todoSlice.actions;

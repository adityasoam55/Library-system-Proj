import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "../utils";

const storedBooks = JSON.parse(localStorage.getItem("booksList")) || booksData;

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: storedBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload);
      localStorage.setItem("booksList", JSON.stringify(state.list)); // ✅ save to localStorage
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

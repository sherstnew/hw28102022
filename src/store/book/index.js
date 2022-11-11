import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  books: [],
  status: Statuses.idle,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.books = action.payload;
      state.status = Statuses.success;
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});

export const {startLoading, successLoading, failLoading} = bookSlice.actions;

export default bookSlice.reducer;
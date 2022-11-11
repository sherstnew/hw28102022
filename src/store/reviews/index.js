import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  reviews: [],
  status: Statuses.idle,
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.reviews = action.payload;
      state.status = Statuses.success;
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});

export const {startLoading, successLoading, failLoading} = reviewSlice.actions;

export default reviewSlice.reducer;
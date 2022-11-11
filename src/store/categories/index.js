import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  categories: [],
  status: Statuses.idle,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.categories = action.payload;
      state.status = Statuses.success;
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});

export const {startLoading, successLoading, failLoading} = categorySlice.actions;

export default categorySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.idle,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
      state.status = Statuses.success;
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});

export const {startLoading, successLoading, failLoading} = userSlice.actions;

export default userSlice.reducer;
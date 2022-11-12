import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const cartSlice = createSlice({
  name: "slice",
  initialState: {
    entities: {},
    ids: [],
    status: Statuses.idle,
  },
  reducers: {
    incBook: (state, action) => {
      state.entities.find(cartItem => cartItem.id === action.payload.id).amount += 1;
    },
    decBook: (state, action) => {
      state.entities.find(cartItem => cartItem.id === action.payload.id).amount -= 1;
    },
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      let cart = [];
      for (let key in action.payload.entities) {
        let cartItem = {
          id: key,
          amount: 0,
        };
        cart.push(cartItem);
      };
      state.entities = cart;
      state.ids = action.payload.ids;
      state.status = Statuses.success;
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
    },
  },
});

export const {incBook, decBook, startLoading, successLoading, failLoading} = cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const cartSlice = createSlice({
  name: "slice",
  initialState: {
    cart: [],
    status: Statuses.idle,
  },
  reducers: {
    incBook: (state, action) => {
      state.cart.find(cartItem => cartItem.id === action.payload.id).amount += 1;
    },
    decBook: (state, action) => {
      state.cart.find(cartItem => cartItem.id === action.payload.id).amount -= 1;
    },
    prepareCart: (state, action) => {
      let cart = [];
      action.payload.forEach(book => {
        let cartItem = {
          id: book.id,
          amount: 0
        };
        cart.push(cartItem);
      });
      state.cart = cart;
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
    },
  },
});

export const {incBook, decBook, prepareCart, failLoading} = cartSlice.actions;

export default cartSlice.reducer;
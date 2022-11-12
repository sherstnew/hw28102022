export const selectCartModule = (state) => state.cart;

export const selectCart = (state) =>
  Object.values(selectCartModule(state).entities);
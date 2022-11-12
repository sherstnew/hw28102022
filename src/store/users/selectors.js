export const selectUserModule = (state) => state.users;

export const selectUsers = (state) =>
  Object.values(selectUserModule(state).entities);
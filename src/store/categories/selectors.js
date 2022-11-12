export const selectCategoryModule = (state) => state.categories;

export const selectCategories = (state) =>
  Object.values(selectCategoryModule(state).entities);
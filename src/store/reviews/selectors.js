export const selectReviewModule = (state) => state.reviews;

export const selectReview = (state, id) =>
  Object.values(selectReviewModule(state).entities).find(rev => rev.id === id);
import { startLoading, successLoading, failLoading } from ".";

export const loadCategories = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    dispatch(successLoading(categories));
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
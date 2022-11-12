import { startLoading, successLoading, failLoading } from ".";
import { prepareData } from "../utils";

export const loadCategories = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    dispatch(successLoading(prepareData(categories)));
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
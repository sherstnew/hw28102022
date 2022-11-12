import { startLoading, successLoading, failLoading} from ".";
import { prepareData } from "../utils";

export const loadReviews = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/reviews")
  .then((response) => response.json())
  .then((reviews) => {
    dispatch(successLoading(prepareData(reviews)));
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
import { startLoading, successLoading, failLoading} from ".";

export const loadReviews = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/reviews")
  .then((response) => response.json())
  .then((reviews) => {
    dispatch(successLoading(reviews));
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
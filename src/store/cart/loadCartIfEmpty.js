import { startLoading, successLoading, failLoading} from ".";
import { prepareData } from "../utils";

export const loadCartIfEmpty = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/books")
  .then((response) => response.json())
  .then((books) => {
    dispatch(successLoading(prepareData(books)));
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
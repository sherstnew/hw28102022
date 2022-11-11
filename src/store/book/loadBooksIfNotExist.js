import { startLoading, successLoading, failLoading} from ".";
import { loadCartIfEmpty } from "../cart/loadCartIfEmpty";

export const loadBooksIfNotExist = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/books")
  .then((response) => response.json())
  .then((books) => {
    dispatch(successLoading(books));
    loadCartIfEmpty(dispatch, books)
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
import { startLoading, successLoading, failLoading} from ".";
import { prepareData } from "../utils";

export const loadUsers = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/users")
  .then((response) => response.json())
  .then((users) => {
    dispatch(successLoading(prepareData(users)));
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
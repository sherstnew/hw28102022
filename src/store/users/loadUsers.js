import { startLoading, successLoading, failLoading} from ".";

export const loadUsers = (dispatch) => {

  dispatch(startLoading())

  fetch("http://localhost:3001/api/users")
  .then((response) => response.json())
  .then((users) => {
    dispatch(successLoading(users));
  })
  .catch(() => {
    dispatch(failLoading());
  });

};
import { prepareCart, failLoading } from ".";

export const loadCartIfEmpty = (dispatch, books) => {

    if (!books) {
        failLoading();
    } else {
        dispatch(prepareCart(books));
    }
};

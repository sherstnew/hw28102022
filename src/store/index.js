import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cart/index';
import bookReducer from './book/index';
import categoryReducer from './categories/index';
import reviewReducer from './reviews/index';
import userReducer from './users/index';

export const store = configureStore({
    reducer: combineReducers({
        cart: cartReducer,
        book: bookReducer,
        categories: categoryReducer,
        reviews: reviewReducer,
        users: userReducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
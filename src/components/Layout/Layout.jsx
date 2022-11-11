import {
    Routes,
    Route,
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { loadBooksIfNotExist} from '../../store/book/loadBooksIfNotExist';
import { loadCategories } from "../../store/categories/loadCategories";
import { loadReviews } from "../../store/reviews/loadReviews";
import { loadUsers } from "../../store/users/loadUsers";

import { BooksPage } from '../App/pages/BooksPage/BooksPage';
import { BookPage } from '../App/pages/BookPage/BookPage';
import { CartPage } from '../App/pages/CartPage/CartPage';
import { NotFoundPage } from '../App/pages/NotFoundPage/NotFoundPage';

export const Layout = props => {
    const dispatch = useDispatch()

    useEffect(() => {
        loadBooksIfNotExist(dispatch);
        loadCategories(dispatch);
        loadReviews(dispatch);
        loadUsers(dispatch);

        return undefined;
    }, []);

        return <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/books" element={<BookPage />}>
                <Route path=":bookId" element={<BookPage />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
};
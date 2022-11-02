import React from 'react';
import { BooksPage } from '../App/pages/BooksPage/BooksPage';
import { BookPage } from '../App/pages/BookPage/BookPage';
import { books } from '../../constants/books';
import { categories } from '../../constants/categories'

export const Layout = props => {
    return <BooksPage categories={ categories } books={ books } />
    // поменять страницы
    // return <BookPage book={ books[0] } />
}
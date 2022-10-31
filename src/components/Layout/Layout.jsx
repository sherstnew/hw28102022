import React from 'react';
import { BooksPage } from '../../pages/BooksPage/BooksPage';
import { BookPage } from '../../pages/BookPage/BookPage';
import { books } from '../../constants/books';
import { categories } from '../../constants/categories';

export const Layout = props => {
    return props.activePage !== 'home' ? <BookPage activePage={ props.activePage } setActivePage={ props.setActivePage } book={ props.activeBook }></BookPage> : <BooksPage activePage={ props.activePage } activeBook={ props.activeBook } setActivePage={ props.setActivePage } setActiveBook={ props.setActiveBook } categories={ categories } books={ books }></BooksPage>
}
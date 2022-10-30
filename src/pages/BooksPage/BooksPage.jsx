import { Book } from '../../components/BooksPage/Book/Book';
import { Genre } from '../../components/BooksPage/Genre/Genre';
import { BookHeader } from '../../components/BooksPage/BookHeader/BookHeader'

import './BooksPage.css';

export const BooksPage = props => {

    let genres_key = 0;
    let books_key = 0;

    return <main className="main">
        <BookHeader></BookHeader>
        <div className='main__lists'>
            <ul className="lists__genres-list">
                {
                    props.genres.map((genre) => <Genre key={ genres_key++ } gcount={ genres_key++ } genre={genre}></Genre>)
                }
            </ul>
            <ul className='lists__book-list'>
                {
                    props.books.map((book) => <Book key={ books_key++ } book={book}></Book>)
                }
            </ul>
        </div>
    </main>
};
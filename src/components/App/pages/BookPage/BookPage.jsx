import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { BookHeader } from "../../../BookHeader/BookHeader";
import { Book } from "../../../Book/Book";
import { Annotation } from "../../../Annotation/Annotation";
import { Reviews } from "../../../Reviews/Reviews";

import './BookPage.css';

export const BookPage = props => {

    const params = useParams();

    const books = useSelector(state => state.book.books);
    const book = books.find(item => item.id === params.bookId);

    if (books.length === 0) {
        return null;
    } else {
        return <main className="main">
            <BookHeader />
            <div className="main__content">
                <div className="content__book">
                    <Book className='book__book-item' book={ book } />
                    <Annotation annotation={ book.annotation } />
                </div>
                <Reviews book={ book } />
            </div>
        </main>
    };
};
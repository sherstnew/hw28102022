import { BookHeader } from "../../components/BookHeader/BookHeader"
import { Book } from "../../components/BooksPage/Book/Book"
import { Annotation } from "../../components/BookPage/Annotation/Annotation"
import { Reviews } from "../../components/BookPage/Reviews/Reviews"

import './styles/BookPage.css'

export const BookPage = props => {
    return <main className="main">
        <BookHeader activePage={ props.activePage } setActivePage={ props.setActivePage }></BookHeader>
        <div className="main__content">
            <div className="content__book">
                <Book className='book__book-item' book={ props.book }></Book>
                <Annotation annotation={ props.book.annotation }></Annotation>
            </div>
            <Reviews book={ props.book } ></Reviews>
        </div>
    </main>
}
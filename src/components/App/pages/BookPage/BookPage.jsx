import { BookHeader } from "../../../BookHeader/BookHeader"
import { Book } from "../../../Book/Book"
import { Annotation } from "../../../Annotation/Annotation"
import { Reviews } from "../../../Reviews/Reviews"

import './BookPage.css'

export const BookPage = props => {
    return <main className="main">
        <BookHeader />
        <div className="main__content">
            <div className="content__book">
                <Book className='book__book-item' book={ props.book } />
                <Annotation annotation={ props.book.annotation } />
            </div>
            <Reviews book={ props.book } />
        </div>
    </main>
}
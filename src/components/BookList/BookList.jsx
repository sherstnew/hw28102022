import { Book } from "../Book/Book"

export const BookList = props => {
    return <ul className='lists__book-list'>
        {
            props.books.map((book) => book.category === props.activeCategory ? <Book className='book-list__book-item' key={ book.isbn } book={ book } /> : '')
        }
    </ul>
}
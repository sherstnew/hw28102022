import { Book } from "../Book/Book"

export const BookList = props => {
    return <ul className='lists__book-list'>
        {
            props.books.map((book) => book.category === props.activeCategory ? <Book className='book-list__book-item' activePage={ props.activePage } activeBook={ props.activeBook } setActivePage={ props.setActivePage } setActiveBook={ props.setActiveBook } key={ book.isbn } book={ book } ></Book> : '')
        }
    </ul>
}
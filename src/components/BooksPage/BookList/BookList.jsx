import { Book } from "../Book/Book"

import './styles/BookList.css'

export const BookList = props => {

    let notfound_counter = 0

    return <ul className='lists__book-list'>
        {
            props.books.map((book) => book.category === props.activeCategory ? <Book className='book-list__book-item' activePage={ props.activePage } activeBook={ props.activeBook } setActivePage={ props.setActivePage } setActiveBook={ props.setActiveBook } key={ book.isbn } book={ book } ></Book> : <div className="book-list__notfound" key={ notfound_counter++ }></div>)
        }
    </ul>
}
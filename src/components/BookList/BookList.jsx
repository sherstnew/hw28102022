import { useSelector } from "react-redux"

import { Book } from "../Book/Book"

export const BookList = props => {

    const books = useSelector(state => state.book.books)

    if (!books) {
        return null
    } else {
        return <ul className='lists__book-list'>
            {
                books.map((book) => book.category === props.activeCategory ? <Book className='book-list__book-item' key={ book.id } book={ book } /> : '')
            }
        </ul>
    }
}
import { useSelector } from "react-redux"
import { selectBooks } from "../../store/book/selectors"

import { Book } from "../Book/Book"

export const BookList = props => {

    const books = useSelector(state => selectBooks(state))

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
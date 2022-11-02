import './Book.css';
import { BookCounter  } from '../BookCounter/BookCounter';

export const Book = props => {
    return <li className={ props.className }>
    <div className="book-item__book">
            <div className="book__name">{ props.book.bookName }</div>
            <div className="book__author">{ props.book.author }</div>
            <div className="book__genre">{ props.book.genre }</div>
            <div className="book__stars">{ props.book.stars }</div>
            <div className="book__cost">{ props.book.cost }</div>
    </div>
    <BookCounter />
    </li>
};
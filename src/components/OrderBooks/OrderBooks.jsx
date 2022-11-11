import { useSelector } from 'react-redux';
import book from '../../store/book';

import { Book } from '../Book/Book';

import './OrderBooks.css';

export const OrderBooks = () => {

    const cart = useSelector(state => state.cart.cart)
    const books = useSelector(state => state.book.books)

    return <div className="order-box__order-books">
        {
            cart.map(cartItem => cartItem.amount === 0 ? '' : <Book className='order-books__book-item' key={ cartItem.id } book={ books.find(book => book.id === cartItem.id) }></Book>)
        }
    </div>
};
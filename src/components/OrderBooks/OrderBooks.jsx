import { useSelector } from 'react-redux';
import { selectBooks } from '../../store/book/selectors';
import { selectCart } from '../../store/cart/selectors';

import { Book } from '../Book/Book';

import './OrderBooks.css';

export const OrderBooks = () => {

    const cart = useSelector(state => selectCart(state))
    const books = useSelector(state => selectBooks(state))

    return <div className="order-box__order-books">
        {
            cart.map(cartItem => cartItem.amount === 0 ? '' : <Book className='order-books__book-item' key={ cartItem.id } book={ books.find(book => book.id === cartItem.id) }></Book>)
        }
    </div>
};
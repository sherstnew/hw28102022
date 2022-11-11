import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incBook, decBook} from '../../store/cart';

import './BookCounter.css';

export const BookCounter = props => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);

    if (cart === undefined) {
        return null;
    } else {
    return <div className="book-item__counter">
        <button className="counter__minus-btn" onClick={() => dispatch(decBook({id: props.isbn}))} disabled={cart.find(cartItem => props.isbn === cartItem.id).amount === 0}> - </button>
        <div className="counter__count counter__count_null"> { cart.find(cartItem => props.isbn === cartItem.id).amount } </div>
        <button className="counter__plus-btn" onClick={() => dispatch(incBook({id: props.isbn}))}> + </button>
    </div>
    }
};
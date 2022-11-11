import { useSelector } from 'react-redux';

import './Order.css';

export const Order = () => {

    const cart = useSelector(state => state.cart.cart)
    const books = useSelector(state => state.book.books)

    let order_counter = 0
    let total = 0

    cart.map(cartItem => cartItem.amount !== 0 ? total += cartItem.amount * books.find(book => cartItem.id === book.id).cost : total += 0)

    return <div className="order-box__order">
        <div className="order__content">
            <div className="content__header">Ваш заказ:</div>
            <ul className="content__cart">
                {
                    cart.map(cartItem => cartItem.amount === 0 ? '' : <li className='cart__item' key={order_counter++}>
                        <div className='item__name'>
                            {
                                books.find(book => cartItem.id === book.id).bookName
                            }
                        </div>
                        <div className='item__cost'>
                            {
                                cartItem.amount * books.find(book => cartItem.id === book.id).cost
                            }
                            ₽
                        </div>
                    </li>)
                }
            </ul>
        </div>
        <div className="order__total">
            <div className="total__cost">Итого: { total }₽</div>
            <div className="total__buy">Купить</div>
        </div>
    </div>
};
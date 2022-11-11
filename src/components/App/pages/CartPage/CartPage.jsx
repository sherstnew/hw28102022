import { BookHeader } from '../../../BookHeader/BookHeader';
import { Order } from '../../../Order/Order';
import { OrderBooks } from '../../../OrderBooks/OrderBooks';

import './CartPage.css';

export const CartPage = () => {

    return <main className="main">
        <BookHeader></BookHeader>
        <div className="main__order-box">
            <Order></Order>
            <OrderBooks></OrderBooks>
        </div>
    </main>
};
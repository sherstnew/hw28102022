import './BookHeader.css'
import cart from './icons/cart.svg'

export const BookHeader = props => {
    return <header className="main__header">
        <div className="header__header">Магазин</div>
        <img src={ cart }  alt="" className="header__cart-icon" />
    </header>
}
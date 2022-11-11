import { Link } from 'react-router-dom'

import './BookHeader.css'
import cart from './icons/cart.svg'

export const BookHeader = props => {
    return <header className="main__header">
        <div className="header__header"><Link to='/'>Магазин</Link></div>
        <Link to='/cart'><img src={ cart }  alt="" className="header__cart-icon" /></Link>
    </header>
}
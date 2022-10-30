import './styles/Counter.css';

export const BookCounter = () => {
    return <div className="book-item__counter">
        <button className="counter__minus-btn" disabled> - </button>
        <div className="counter__count counter__count_null"> 0 </div>
        <button className="counter__plus-btn"> + </button>
    </div>
};
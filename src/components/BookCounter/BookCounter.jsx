import { useState } from 'react';

import './BookCounter.css';

export const BookCounter = () => {

    const [count, setCount] = useState(0);

    return <div className="book-item__counter">
        <button className="counter__minus-btn" onClick={() => setCount(count - 1)} disabled={count === 0}> - </button>
        <div className="counter__count counter__count_null"> {count} </div>
        <button className="counter__plus-btn" onClick={() => setCount(count + 1)}> + </button>
    </div>
};
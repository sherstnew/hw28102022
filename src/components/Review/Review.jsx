import { useSelector } from 'react-redux';

import './Review.css';

export const Review = props => {

    const reviews = useSelector(state => state.reviews.reviews);
    const review = reviews.find(rev => rev.id === props.review);
    const users = useSelector(state => state.users.users);

    if (reviews.length === 0 || users.length === 0 || review === undefined) {
        return null;
    } else {

        return <div className='reviews__review'>
            <div className="review__header">
                <div className="header__author">{ users.find(user => user.id === review.userId).name }</div>
                <div className="header__stars">{ review.stars }</div>
            </div>
            <div className="review__text">{ review.review }</div>
        </div>
    }
};
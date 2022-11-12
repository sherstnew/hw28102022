import { useSelector } from 'react-redux';
import { selectReview } from '../../store/reviews/selectors';
import { selectUsers } from '../../store/users/selectors';

import './Review.css';

export const Review = props => {

    const review = useSelector(state => selectReview(state, props.review));
    const users = useSelector(state => selectUsers(state));

    if (users.length === 0 || review === undefined) {
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
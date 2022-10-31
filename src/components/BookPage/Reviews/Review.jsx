import './styles/Review.css';

export const Review = props => {
    return <div className='reviews__review'>
        <div className="review__header">
            <div className="header__author">{ props.review.author }</div>
            <div className="header__stars">{ props.review.stars }</div>
        </div>
        <div className="review__text">{ props.review.review }</div>
    </div>
}
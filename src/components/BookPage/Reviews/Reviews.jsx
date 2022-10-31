import { reviews } from "../../../constants/reviews";
import { Review } from "./Review";

import './styles/Reviews.css';

export const Reviews = props => {

    let review_key = 0;

    return <div className="content__reviews">
        {
            reviews.map((review) => props.book.bookName === review.book ? <Review key={ review_key++ } review={ review }></Review> : '')
        }
    </div>
};
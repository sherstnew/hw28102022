import { Review } from "../Review/Review";

import './Reviews.css';

export const Reviews = props => {


    if (props.book === undefined) {
        return null;
    } else {

        return <div className="content__reviews">
            {
                props.book.reviews.map(review => <Review key={ review } review={ review } />)
            }
        </div>
    }
};
import {getReviews} from "../../queries/queries";
import { useState, useEffect } from "react";
import {ReviewCard} from "../";
import { useParams } from "react-router-dom";


export default function Reviews() {

    const [loading, setLoading] = useState(true);
    const [reviewsList, setReviewsList] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        getReviews(category).then((response) => {
            setLoading(false);
            return setReviewsList(response.reviews);
        });
    }, [category])
    
    if (loading) {
        return (<h2>Loading...</h2>)
    } else {
        return (
            <ul className="review-container">
            {
                reviewsList.map((review) => {
                    return (
                        <li className="review-item" id={review.review_id} key={review.review_id}>
                            <ReviewCard review={review} />
                        </li>
                    )
                })
            }
            </ul>
        );
    }


}
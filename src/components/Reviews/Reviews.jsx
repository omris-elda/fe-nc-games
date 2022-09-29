import {GetReviews} from "../../queries/queries";
import { useState, useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useParams } from "react-router-dom";


export default function Reviews() {

    const [loading, setLoading] = useState(true);
    const [reviewsList, setReviewsList] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        GetReviews(category).then((response) => {
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
                        <ReviewCard review={review} />
                    )
                })
            }
            </ul>
        );
    }


}
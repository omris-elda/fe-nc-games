import GetReviews from "../queries/queries";
import { useState, useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function Reviews() {

    const [loading, setLoading] = useState(true);
    const [reviewsList, setReviewsList] = useState([]);

    useEffect(() => {
        setLoading(true);
        console.log("inside of the reviews useeffect");
        GetReviews().then((response) => {
            console.log(response.reviews)
            setLoading(false);
            return setReviewsList(response.reviews);
        });
    }, [])
    
    if (loading) {
        return (<h2>Loading...</h2>)
    } else {
        console.log("Inside the else");
        return (
            <section>
                <div className="review-container">
                    {
                        reviewsList.map((review) => {
                            return (
                            <ul className="review-item">
                                <ReviewCard review={review} />
                            </ul>
                            )
                        })
                    }
                </div>
            </section>
        );
    }


}
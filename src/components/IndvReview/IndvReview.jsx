import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetReviews } from "../../queries/queries";
import { Comments } from "../";
import { Link } from "react-router-dom";
export default function IndvReview() {

    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState([]);
    const { review_id } = useParams();
    console.log(review_id, "Review ID in IndvReview")


    useEffect(() => {
        setLoading(true);
        GetReviews(null, review_id).then((response) => {
            setLoading(false);
            console.log(response, "Review")
            return setReview(response.review);
        });
    }, [review_id])
    if (loading) {
        return (<h2>Loading...</h2>)
    } else {
        return (
          <section className="indv-review-wrapper">
            <h2 className="indv-review-title">{review.title}</h2>
            <img
              src={review.review_img_url}
              className="indv-review-img"
              alt=""
            />
            <p className="indv-review-body">{review.review_body}</p>
            <p className="indv-review-author">
              <Link to={`/users/${review.owner}`}>By: {review.owner}</Link>
            </p>
                <p className="indv-review-votes">Votes: {review.votes}</p>

                <h3 className="comment-title">Comments:</h3>
            <Comments comment_id={review_id} />
          </section>
        );
    }
}
import { Link } from "react-router-dom";
import { Votes } from "../";
export default function ReviewCard({ review }) {

    // this cuts off the body if it is longer than 150 chars and adds a read more link
    let divs = document.getElementsByClassName("review-text");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].innerHTML.length > 150) {
        divs[i].innerHTML =
          divs[i].innerHTML.substring(0, 150) + `...`;
      }
    }

  return (
    <div>
      <Link to={`/reviews/${review.review_id}`}>
        <h3 className="review-title">{review.title}</h3>
        <div className="review-body">
          <img
            src={review.review_img_url}
            alt={`For review ${review.title}`}
            className="review-image"
          />
          <div className="review-inner">
            <p className="review-text" id={review.review_id}>
              {review.review_body}
            </p>

            <Votes review_id={review.review_id} votes={review.votes} />

            <p className="review-comment-count">
              Comments: {review.comment_count}
            </p>
          </div>
        </div>
      </Link>
        <div className="review-footer">
          <p className="review-author">
            <Link to={`/users/${review.owner}`}>By: {review.owner}</Link>
          </p>
          <p className="review-category">
            <Link to={`/reviews/category/${review.category}`}>
              Category: {review.category}
            </Link>
          </p>
        </div>
      <hr />
    </div>
  );
}

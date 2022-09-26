import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  return (
    <li className="review-container" key={review.review_id}>
          <h3 className="review-title">{review.title}</h3>
          <div className="review-body">
            <p className="review-text">{review.review_body}</p>
            <img src={review.review_img_url} alt={`For review ${review.title}`} className="review-image"/>
          </div>
          {/* add link to review owners profile here! */}
          <p className="review-author"><Link to={`users/${review.owner}`} >By: {review.owner}</Link></p>
          <hr/>
    </li>
  );
}

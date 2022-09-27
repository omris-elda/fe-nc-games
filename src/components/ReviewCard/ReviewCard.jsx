import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {

    // this cuts off the body if it is longer than 150 chars and adds a read more link
    let divs = document.getElementsByClassName("review-text");
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].innerHTML.length > 150) {
            divs[i].innerHTML =
            divs[i].innerHTML.substring(0, 150) + `... <a href="#" class="readmore">Read more</a>`;
        }
    }

  return (
    <li className="review-item" key={review.review_id}>
      <h3 className="review-title">{review.title}</h3>
      <div className="review-body">
          <img src={review.review_img_url} alt={`For review ${review.title}`} className="review-image" />
          <div className="review-inner">
            <p className="review-text">{review.review_body}</p>
            {/* functionality for upvoting? */}
            <p className="review-votes">Votes: {review.votes}</p>
            <p className="review-comment-count">Comments: {review.comment_count}</p>
          </div>
        </div>
        <div className="review-footer">
          {/* add link to review owners profile here! */}
          <p className="review-author"><Link to={`/users/${review.owner}`} >By: {review.owner}</Link></p>
          <p className="review-category"><Link to={`/reviews/category/${review.category}`} >Category: {review.category}</Link></p>
        </div>
          <hr/>
    </li>
  );
}

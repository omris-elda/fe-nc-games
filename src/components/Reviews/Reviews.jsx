import {getReviews} from "../../queries/queries";
import { useState, useEffect } from "react";
import {ReviewCard} from "../";
import { useParams } from "react-router-dom";


export default function Reviews() {

    const [loading, setLoading] = useState(true);
    const [reviewsList, setReviewsList] = useState([]);
    const { category } = useParams();
    const [sortBy, setSortBy] = useState("");
    const [orderBy, setOrderBy] = useState("");


    useEffect(() => {
        setLoading(true);

        getReviews(category, null, sortBy, orderBy).then((response) => {
            setLoading(false);
            return setReviewsList(response.reviews);
        });
    }, [category, sortBy, orderBy])

    
    if (loading) {
        return (<h2>Loading...</h2>)
    } else {
        return (
          <section>
            <label htmlFor="sortBy">Sort By: </label>
            <select
              id="sortBy"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option key="date" value="date">
                Date
              </option>
              <option key="votes" value="votes">
                Votes
              </option>
              <option key="comment_count" value="comment_count">
                Comment Count
              </option>
                </select>
                
            <label htmlFor="orderBy">Order By: </label>
            <select
              id="sortBy"
              onChange={(e) => setOrderBy(e.target.value)}
              value={orderBy}
            >
              <option key="ascending" value="asc">
                Ascending
              </option>
              <option key="descending" value="desc">
                Descending
              </option>
            </select>
            <ul className="review-container">
              {reviewsList.map((review) => {
                return (
                  <li
                    className="review-item"
                    id={review.review_id}
                    key={review.review_id}
                  >
                    <ReviewCard review={review} />
                  </li>
                );
              })}
            </ul>
          </section>
        );
    }


}
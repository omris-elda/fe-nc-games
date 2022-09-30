import { getComments } from "../../queries/queries";
import { useState, useEffect } from "react";
import { CommentCard, AddComment } from "../"

export default function Comments(review_id) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      getComments(review_id).then((response) => {
        setLoading(false);
        return setComments(
          response.comments
        );
      });
    }, [review_id]);
  
    const deleteComment = (e) => {
      setLoading(true);
      return null;
    };
  
    if (loading) {
        return (<h2>Loading...</h2>)
    } else {
        return (
          <div className="comment-container">
            <h3 className="comment-title">Comments:</h3>
            <AddComment review_id={review_id} setComments={setComments} />
            <ul>
              <hr />
              {
                comments.map((comment) => {
                return (
                  <li key={comment.comment_id}>
                    <CommentCard comment={comment} />
                  </li>
                );
              }).reverse()}
            </ul>
          </div>
        );
    }
}

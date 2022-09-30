import { getComments } from "../../queries/queries";
import { useState, useEffect } from "react";
import { CommentCard, AddComment, GenericError } from "../"

export default function Comments(review_id) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      getComments(review_id).then((response) => {
        if (comments.length === 0) {
          setError("No review with that ID found.")
        } else {
          setLoading(false);
          return setComments(
            response.comments
          );
        }
      });
    }, [review_id]);
  
    const deleteComment = (e) => {
      setLoading(true);
      return null;
  };
  
  if (error) {
    return <GenericError error={error} />;
  }  
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

import { GetComments } from "../../queries/queries";
import { useState, useEffect } from "react";
import { CommentCard } from "../"

export default function Comments(review_id) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      GetComments(review_id).then((response) => {
        setLoading(false);
        return setComments(response.comments);
      });
    }, [review_id]);

    if (loading) {
        return (<h2>Loading...</h2>)
    } else {
        return (
          <ul className="comment-container">
            <hr />
            {comments.map((comment) => {
              return <CommentCard comment={comment} />;
            })}
          </ul>
        );
    }
}

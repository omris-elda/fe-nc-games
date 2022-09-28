import { Link } from "react-router-dom";

export default function CommentCard(comment) {
    return (
      <section className="comment-container">
        <h3 className="comment-author">
          <Link to={`/users/${comment.comment.author}`}>By: {comment.comment.author}</Link>
        </h3>
        <p>{comment.comment.body}</p>
        <p>Votes: {comment.comment.votes}</p>
        {/* <p>Posted on: {comment.comment.created_at}</p> */}
        <hr />
      </section>
    );
}
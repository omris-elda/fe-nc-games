import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedIn } from "../../contexts/loggedin";

export default function CommentCard(comment) {

  const { loggedIn } = useContext(LoggedIn)

  const deleteComment = (e) => {
    return null;
  }
    return (
      <section className="comment-container">
        <h4 className="comment-author">
          <Link to={`/users/${comment.comment.author}`}>
            By: {comment.comment.author}
          </Link>
        </h4>
        <p>{comment.comment.body}</p>
        <p>Votes: {comment.comment.votes}</p>
        {(loggedIn===comment.comment.author) ? (
          <button className="buttons" onClick={() => deleteComment()}>
            Delete Comment
          </button>
        ) : (
          <p></p>
        )}
        <hr />
      </section>
    );
}
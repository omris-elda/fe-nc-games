import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LoggedIn } from "../../contexts/loggedin";
import { deleteComment } from "../../queries/queries";

export default function CommentCard({comment}) {

  const { loggedIn } = useContext(LoggedIn);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState();


  const deleteCommentFunc = () => {
    setLoading(true);
    deleteComment(comment.comment_id)
      .then((response) => {
        setLoading(false);
        if (response === 204) {
          setDeleted(true);
        } else {
          setDeleted(false);
        }
    })
  }

  if (loading) {
    return <h3>Deleting your comment...</h3>
  } else if (deleted) {
    return <h3>Your comment has successfully been deleted.</h3>
  } else {
    return (
      <section className="comment-container">
        {(deleted===false) ? <h3>Sorry, something went wrong when trying to delete your comment. Please reload the page and try again.</h3> : <p></p>}
        <h4 className="comment-author">
          <Link to={`/users/${comment.author}`}>
            By: {comment.author}
          </Link>
        </h4>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
        {(loggedIn === comment.author) ? (
          <button className="buttons" onClick={() => deleteCommentFunc()}>
            Delete Comment
          </button>
        ) : (
          <p></p>
        )}
        <hr />
      </section>
    );
  }
}
import { useContext, useState } from "react";
import { LoggedIn } from "../../contexts/loggedin";
import { postComment } from "../../queries/queries";
import { Link } from "react-router-dom";

export default function AddComment({ review_id, setComments }) {
    
  const { loggedIn } = useContext(LoggedIn);
  const [newCommentText, setNewCommentText] = useState("");
  const [loading, setLoading] = useState(false);

  let newComment = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    newComment = {
      username: loggedIn,
      body: newCommentText,
      review_id: review_id.comment_id,
    };
    postComment(newComment).then((response) => {
      console.log(response)
        setLoading(false);
        setComments((currComments) => {
            newComment.author = loggedIn;
            newComment.votes = 0;
            setNewCommentText("");
            return [...currComments, response.comment]
        })
    });
  };
    
  if (loggedIn === "") {
    return <h3><Link to="/login">Sorry, you have to be logged in to post a new comment.</Link></h3>;
  } else if (loading) {
    return <h3>Posting your comment...</h3>;
  } else {
    return (
      <form id="add-new-comment" onSubmit={handleSubmit}>
        <label htmlFor="new-comment-text" className="new-comment-label">New Comment: </label>
        <textarea
          id="new-comment-text"
          name="new-comment-text"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          required
        />
        <button type="submit">Post Comment</button>
      </form>
    );
  }
}
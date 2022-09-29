import { useContext, useState } from "react";
import { LoggedIn } from "../../contexts/loggedin";


export default function AddComment(review_id) {
    const { loggedIn } = useContext(LoggedIn);
    const [newComment, setNewComment] = useState({})
    const [loading, setLoading] = useState(true);

    const handleSubmit = (e) => {

    }

    if (loggedIn === "") {
        return (
            <h3>Sorry, you have to be logged in to post a new comment.</h3>
        )
    } else if (loading) {
        return <h3>Posting your comment...</h3>
    } else {
        
        return (
            <form id="add-new-comment" onSubmit={handleSubmit}>
                <input type="multiline" />
            </form>
        );
    }
}
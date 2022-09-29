import { useContext } from "react";
import { LoggedIn } from "../../contexts/loggedin";


export default function AddComment(review_id) {
    const { loggedIn } = useContext(LoggedIn);

    if (loggedIn === "") {
        return (
            <h3>Sorry, you have to be logged in to post a new comment.</h3>
        )
    } else {
        
        return (
            <form action="">
                <input type="multiline" />
            </form>
        );
    }
}
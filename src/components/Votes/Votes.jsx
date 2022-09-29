import { useState } from "react";
import { PatchReviewVotes } from "../../queries/queries";

export default function Votes({review_id, votes}) {
    const [vote, setVote] = useState(votes);

    const HandleUpvote = (e) => {
        e.preventDefault();
        if (!review_id) {
            return null;
        }
        setVote((vote) => vote + 1);
        PatchReviewVotes(review_id, 1);
    }

    const HandleDownvote = (e) => {
      e.preventDefault();
      setVote((vote) => vote - 1);
      PatchReviewVotes(review_id, -1);
    };

    return (
      <div className="votes-container">
        <form id="add-votes" onSubmit={HandleUpvote}>
          <button>Upvote</button>
        </form>
        <p>Votes: {vote}</p>
        <form id="add-votes" onSubmit={HandleDownvote}>
          <button>Downvote</button>
        </form>
      </div>
    );
}
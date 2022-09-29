import { useState } from "react";
import { PatchReviewVotes } from "../../queries/queries";

export default function Votes({ review_id, votes }) {
  const [vote, setVote] = useState(votes);

  function HandleVoteChange(input) {
    if (input < 0) {
      if (vote > 0) {
        setVote((vote) => vote + input);
        PatchReviewVotes(review_id, input);
      }
    } else {
      setVote((vote) => vote + input);
      PatchReviewVotes(review_id, input);
    }
  }

  return (
    <div className="votes-container">
      <button onClick={() => HandleVoteChange(1)}>Upvote</button>
      <p>Votes: {vote}</p>
      <button onClick={() => HandleVoteChange(-1)}>Downvote</button>
    </div>
  );
}

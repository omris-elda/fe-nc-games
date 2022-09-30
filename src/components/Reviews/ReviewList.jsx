import { Reviews, SortReview } from "../";
import { useState } from "react";

export default function ReviewList() {
  const [sortBy, setSortBy] = useState("date");
  const [orderBy, setOrderBy] = useState("asc");

    return (
      <section>
        <SortReview
          sortBy={sortBy}
          setSortBy={setSortBy}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
        <Reviews
            sortBy={sortBy}
            orderBy={orderBy}
        />
      </section>
    );
}
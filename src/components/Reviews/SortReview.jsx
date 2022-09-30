export default function SortReview({sortBy, setOrderBy, setSortBy, orderBy}) {
  return (
    <div>
      <label htmlFor="sortBy">Sort By: </label>
      <select
        id="sortBy"
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
      >
        <option key="date" value="date">
          Date
        </option>
        <option key="votes" value="votes">
          Votes
        </option>
        {/* Comment count hasn't been implemented in the back end. */}
        {/* <option key="comment_count" value="comment_count">
                Comment Count
              </option> */}
      </select>

      <label htmlFor="orderBy">Order By: </label>
      <select
        id="orderBy"
        onChange={(e) => setOrderBy(e.target.value)}
        value={orderBy}
      >
        <option key="ascending" value="asc">
          Ascending
        </option>
        <option key="descending" value="desc">
          Descending
        </option>
      </select>
    </div>
  );
}

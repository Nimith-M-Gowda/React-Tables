import React from "react";

import "../styles/SearchInput.css";
function SearchInput({ filter, setFilter }) {
  return (
    <div className="searchcontainer">
      <h2>Search :</h2>
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
}

export default SearchInput;

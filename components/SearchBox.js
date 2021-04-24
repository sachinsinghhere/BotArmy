import React from "react";

function SearchBox({ searchAction }) {
  return (
    <div className="pa2 ba b--green bg-lightest-green">
      <input type="search" placeholder="search bots" onChange={searchAction} />
    </div>
  );
}

export default SearchBox;

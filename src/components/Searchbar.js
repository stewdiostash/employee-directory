import React from "react";

const Searchbar = ({ handleFilter }) => {
  return (
    <div class="field has-addons columns is-centered my-5">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Find a repository"
          onChange={(event) => handleFilter(event)}
        />
      </div>
      {/* <div class="control">
        <a class="button is-info">Search</a>
      </div> */}
    </div>
  );
};

export default Searchbar;

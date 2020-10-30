import React from "react";

const Searchbar = ({ handleFilter }) => {
  return (
    <div className="field my-5">
      <div className="control">
        <input
          className="container input is-medium"
          type="text"
          placeholder="Find an employee"
          onChange={(event) => handleFilter(event)}
        />
      </div>
    </div>
  );
};

export default Searchbar;

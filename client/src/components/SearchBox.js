import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/SearchBox.css";

const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ currentTarget: { value } }) => {
    setValue(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="search-cont" onSubmit={handleClick} action="GET">
      <input
        type="text"
        className="search-input"
        placeholder="Search for Recipes"
        onChange={handleChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="search-svg"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <button type="submit" hidden></button>
    </form>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;

import React, { useState } from "react";
import "../styles/SearchBox.css";
import { setQuery } from "../redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";

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
    <form className="search-cont" onSubmit={handleClick}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for Recipes"
        onChange={handleChange}
      />
      <button type="submit" className="search-btn">
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
      </button>
    </form>
  );
};

// export default connect(null, { setQuery })(SearchBox);
export default SearchBox;

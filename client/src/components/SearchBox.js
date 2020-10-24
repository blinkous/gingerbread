import React from "react";
import "../styles/SearchBox.css";
import { setSearch } from "../redux/actions";
import { connect } from "react-redux";

const SearchBox = ({ d_setSearch }) => {
  const handleChange = ({ currentTarget: { value } }) => {
    d_setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-cont" onSubmit={handleSubmit}>
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
        className="search-svg search-btn"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </form>
  );
};

export default connect(null, {
  d_setSearch: setSearch,
})(SearchBox);

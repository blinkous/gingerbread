import React from "react";
import "../styles/Home.css";
import RecipeCard from "./RecipeCard";
import { connect } from "react-redux";

const SearchResults = ({ recipes, showStatic }) => {
  return (
    <div className="results">
      {showStatic && recipes.length > 0 && (
        <p className="no-results">
          No results were found, but here are some Gingerbread Cookies &hearts;
        </p>
      )}
      {recipes.map(({ image, title, id }, index) => (
        <RecipeCard title={title} image={image} key={index} id={id} />
      ))}
    </div>
  );
};

export default connect(({ recipes }) => ({ recipes }))(SearchResults);

import React from "react";
import "../styles/RecipeCard.css";
import PropType from "prop-types";

const RecipeCard = ({ title, image, onClick = null }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img className="recipe-image" src={image} alt={title} />
      <h5 className="recipe-title">{title}</h5>
    </div>
  );
};

RecipeCard.propTypes = {
  title: PropType.string.isRequired,
  image: PropType.string.isRequired,
  onClick: PropType.func,
};

export default RecipeCard;

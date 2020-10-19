import React from "react";
import "../styles/RecipeCard.css";

const RecipeCard = ({ title, image, onClick = null }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img className="recipe-image" src={image} alt={title} />
      <h5 className="recipe-title">{title}</h5>
    </div>
  );
};

export default RecipeCard;

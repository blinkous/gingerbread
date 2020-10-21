import React from "react";
import "../styles/RecipeCard.css";
import { connect } from "react-redux";
import { setActiveRecipe } from "../redux/actions";
import "../styles/RecipeDetails.css";

const RecipeDetails = ({
  activeRecipe: { title, image, extendedIngredients },
  d_setActiveRecipe,
}) => {
  const handleClick = () => {
    d_setActiveRecipe({});
  };

  return (
    <div className="recipe-details">
      <button className="exit-btn" onClick={handleClick}>
        &times;
      </button>
      <h5 className="recipe-title">{title}</h5>
      <img className="recipe-image" src={image} alt={title} />
      {extendedIngredients.map(({ name, image: iImage, measures: { us } }) => (
        <div className="ingredient">
          {/* Image URLS are relative */}
          {/* {iImage ? <img src={iImage} alt={name} /> : null} */}
          <p className="ingredient-info">
            <span className="ingredient-name">{name}</span>
            <span className="ingredient-amount">{us.amount}</span>
            <span className="ingredient-unit">{us.unitShort || ""}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default connect(({ activeRecipe }) => ({ activeRecipe }), {
  d_setActiveRecipe: setActiveRecipe,
})(RecipeDetails);

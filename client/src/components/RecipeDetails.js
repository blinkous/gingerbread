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
  const ingredientImageSize = ["100x100", "250x250", "500x500"];
  const ingredientBaseUrl = `https://spoonacular.com/cdn/ingredients_${ingredientImageSize[0]}/`;

  return (
    <>
      <div className="modal-background" onClick={handleClick}></div>
      <div className="recipe-details">
        <button className="exit-btn" onClick={handleClick}>
          &times;
        </button>
        <h5 className="heading">{title}</h5>
        <img className="recipe-large-image" src={image} alt={title} />
        <div className="ingredients-container">
          {extendedIngredients.map(
            ({ name, image: iImage, measures: { us } }, index) => (
              <div className="ingredient" key={index}>
                {iImage ? (
                  <img
                    src={`${ingredientBaseUrl}${iImage}`}
                    alt={name}
                    className="ingredient-image"
                  />
                ) : null}
                <p className="ingredient-info">
                  <span className="ingredient-amount">{us.amount}</span>{" "}
                  <span className="ingredient-unit">{us.unitShort || ""}</span>{" "}
                  <span className="ingredient-name">{name}</span>
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default connect(({ activeRecipe }) => ({ activeRecipe }), {
  d_setActiveRecipe: setActiveRecipe,
})(RecipeDetails);

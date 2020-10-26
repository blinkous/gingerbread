import React from "react";
import { connect } from "react-redux";
import "../styles/RecipeCard.css";
import { setActiveRecipe } from "../redux/actions";
import { getFromLocalStorage, addToLocalStorage } from "../helpers";
import { getRecipeInformation } from "../fetchers";

const RecipeCard = ({ title, image, id, d_setActiveRecipe }) => {
  const getData = async () => {
    const result = await getRecipeInformation(id);
    console.log("Recipe Information", result);

    if (result && result.hasOwnProperty("id")) {
      addToLocalStorage(`recipe_${id}`, result);
      d_setActiveRecipe(result);
    } else {
      d_setActiveRecipe({});
    }
  };

  const handleClick = () => {
    const localStorageRecipeInfo = getFromLocalStorage(`recipe_${id}`);

    if (localStorageRecipeInfo) {
      console.log("Found recipe info in local storage");
      d_setActiveRecipe(localStorageRecipeInfo);
    } else {
      getData(id);
    }
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img className="recipe-image" src={image} alt={title} />
      <h5 className="recipe-title">{title}</h5>
    </div>
  );
};

export default connect(null, { d_setActiveRecipe: setActiveRecipe })(
  RecipeCard
);

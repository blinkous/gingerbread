import React from "react";
import { connect } from "react-redux";
import "../styles/RecipeCard.css";
import { setActiveRecipe } from "../redux/actions";

const RecipeCard = ({ title, image, id, d_setActiveRecipe }) => {
  const getData = async (recipeId) => {
    try {
      const response = await fetch(`/api/recipe-information/${recipeId}`);
      const body = await response.json();
      console.log("Fetched recipe info results and got: ", body);

      if (body.hasOwnProperty("title")) {
        localStorage.setItem(`recipe_${recipeId}`, JSON.stringify(body));
        d_setActiveRecipe(body);
      }
    } catch (e) {
      console.log("Unable to fetch recipes", e);
      d_setActiveRecipe({});
    }
  };

  const handleClick = () => {
    const localStorageRecipeInfo = JSON.parse(
      localStorage.getItem(`recipe_${id}`)
    );
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

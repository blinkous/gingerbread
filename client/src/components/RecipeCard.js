import React from "react";
import { connect } from "react-redux";
import "../styles/RecipeCard.css";
import { setActiveRecipe } from "../redux/actions";

const RecipeCard = ({ title, image, id, d_setActiveRecipe }) => {
  const getData = async () => {
    try {
      const response = await fetch(`/api/recipe-information/${id}`);
      const body = await response.json();
      console.log(body);

      if (body.hasOwnProperty("title")) {
        d_setActiveRecipe(body);
      }
    } catch (e) {
      console.log("Unable to fetch recipes", e);
      d_setActiveRecipe({});
    }
  };

  const handleClick = () => {
    getData();
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

export const getRecipeResults = async (searchQuery) => {
  try {
    const response = await fetch(`/api/recipes/${searchQuery}`);
    const body = await response.json();
    console.log("Fetched query results and got:", body);

    if (body.length > 0) {
      return body;
    }
  } catch (e) {
    console.log("Unable to fetch recipes", e);
  }
  return null;
};

export const getRecipeInformation = async (recipeId) => {
  try {
    const response = await fetch(`/api/recipe-information/${recipeId}`);
    const body = await response.json();
    console.log("Fetched recipe info results and got: ", body);

    if (body.hasOwnProperty("title")) {
      //   addToLocalStorage(`recipe_${recipeId}`, body);
      //   d_setActiveRecipe(body);
      return body;
    }
  } catch (e) {
    console.log("Unable to fetch recipes", e);
    // d_setActiveRecipe({});
  }
  return null;
};

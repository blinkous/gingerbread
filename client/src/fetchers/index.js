export const getRecipeResults = async (searchQuery) => {
  /* Try to get the results for this search query from the backend */
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
  /* Try to get the results for this recipe id from the backend */
  try {
    const response = await fetch(`/api/recipe-information/${recipeId}`);
    const body = await response.json();
    console.log("Fetched recipe info results and got: ", body);

    if (body.hasOwnProperty("title")) {
      return body;
    }
  } catch (e) {
    console.log("Unable to fetch recipes", e);
  }
  return null;
};

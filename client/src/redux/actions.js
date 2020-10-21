import {
  POPULATE_RECIPE_RESULTS,
  CLEAR_RECIPE_RESULTS,
  ADD_RECIPE_RESULT,
  SET_SEARCH,
  SET_ACTIVE_RECIPE,
} from "./actionTypes";

export const populateRecipes = (recipes) => ({
  type: POPULATE_RECIPE_RESULTS,
  payload: {
    recipes,
  },
});

export const addToRecipes = (recipes) => ({
  type: ADD_RECIPE_RESULT,
  payload: {
    recipes,
  },
});

export const clearRecipes = () => ({
  type: CLEAR_RECIPE_RESULTS,
});

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: {
    search,
  },
});

export const setActiveRecipe = (recipe) => ({
  type: SET_ACTIVE_RECIPE,
  payload: {
    recipe,
  },
});

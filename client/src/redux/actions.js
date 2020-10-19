import {
  POPULATE_RECIPE_RESULTS,
  CLEAR_RECIPE_RESULTS,
  SET_QUERY,
  ADD_RECIPE_RESULT,
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

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: {
    query,
  },
});

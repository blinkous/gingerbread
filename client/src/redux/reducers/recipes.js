import {
  POPULATE_RECIPE_RESULTS,
  CLEAR_RECIPE_RESULTS,
  ADD_RECIPE_RESULT,
} from "../actionTypes";

const initialState = [];

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_RECIPE_RESULTS:
      return action.payload.recipes;

    case ADD_RECIPE_RESULT:
      return [...state, action.payload.recipes];

    case CLEAR_RECIPE_RESULTS:
      return initialState;

    default:
      return state;
  }
};

export default recipesReducer;

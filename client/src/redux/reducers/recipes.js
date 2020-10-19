import {
  POPULATE_RECIPE_RESULTS,
  CLEAR_RECIPE_RESULTS,
  ADD_RECIPE_RESULT,
} from "../actionTypes";

const initialState = [];

const recipesReducers = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_RECIPE_RESULTS:
      return action.payload;

    case ADD_RECIPE_RESULT:
      return [...state, action.payload];

    case CLEAR_RECIPE_RESULTS:
      return initialState;

    default:
      return state;
  }
};

export default recipesReducers;

import { SET_ACTIVE_RECIPE } from "../actionTypes";

const initialState = {};

const activeRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_RECIPE:
      return action.payload.recipe;
    default:
      return state;
  }
};

export default activeRecipeReducer;

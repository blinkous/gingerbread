import { SET_SEARCH } from "../actionTypes";

const searchReducer = (state = "", action) => {
  switch (action) {
    case SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;

import { SET_SEARCH } from "../actionTypes";

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload.search;
    default:
      return state;
  }
};

export default searchReducer;

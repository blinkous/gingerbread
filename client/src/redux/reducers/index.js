import { combineReducers } from "redux";
import search from "../reducers/search";
import recipes from "../reducers/recipes";

export default combineReducers({ search, recipes });

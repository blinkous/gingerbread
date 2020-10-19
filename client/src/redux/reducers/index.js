import { combineReducers } from "redux";
import search from "../reducers/search";
import recipes from "../reducers/recipes";

const combinedReducers = combineReducers({ search, recipes });
export default combinedReducers;
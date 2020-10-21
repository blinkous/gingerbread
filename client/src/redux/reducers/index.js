import { combineReducers } from "redux";
import search from "../reducers/search";
import recipes from "../reducers/recipes";
import activeRecipe from "../reducers/activeRecipe";

const combinedReducers = combineReducers({ search, recipes, activeRecipe });
export default combinedReducers;

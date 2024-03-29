import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import SearchBox from "./SearchBox";
import GingerBreadImage0 from "../images/gingerbread-cookies-0.jpg";
import GingerBreadImage1 from "../images/gingerbread-cookies-1.jpg";
import GingerBreadImage2 from "../images/gingerbread-cookies-2.jpg";
import GingerBreadImage3 from "../images/gingerbread-cookies-3.jpg";
import GingerBreadImage4 from "../images/gingerbread-cookies-4.jpg";
import GingerBreadImage5 from "../images/gingerbread-cookies-5.jpg";
import { connect } from "react-redux";
import { populateRecipes, addToRecipes, clearRecipes } from "../redux/actions";
import SearchResults from "./SearchResults";
import RecipeDetails from "./RecipeDetails";
import { getFromLocalStorage, addToLocalStorage } from "../helpers";
import { getRecipeResults } from "../fetchers";

const Home = ({
  search,
  recipes,
  activeRecipe,
  d_populateRecipes,
  d_clearRecipes,
}) => {
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    /* Whenever the search changes, trigger onSearch() to look for search results */
    onSearch();
  }, [search]);

  const displayStaticData = () => {
    const noResults = "no_results";
    const localStorageStatic = getFromLocalStorage(noResults);

    /* If static data is in local storage, populate from there, otherwise generate them */
    if (localStorageStatic) {
      d_populateRecipes(localStorageStatic);
    } else {
      const staticData = generateStaticData();
      console.log("Generated static data");
      d_populateRecipes(staticData);
      addToLocalStorage(noResults, staticData);
    }
  };

  const fetchResults = async () => {
    /* Get async recipe results for search from the backend */
    const results = await getRecipeResults(search);
    console.log("results are", results);

    /* If there are results, add them to the recipes, otherwise display the static data */
    if (results) {
      addToLocalStorage(search, results);
      d_populateRecipes(results);
      noResultsFound && setNoResultsFound(false);
    } else {
      setNoResultsFound(true);
      displayStaticData();
    }
  };

  const getResultsFromLocal = () => {
    const localStorageRecipes = getFromLocalStorage(search);

    /* If there is a result in localStorage, populate the recipes from there */
    if (localStorageRecipes) {
      console.log("Found query results in local storage");
      d_populateRecipes(localStorageRecipes);
      noResultsFound && setNoResultsFound(false);
      return true;
    }
    return false;
  };

  const onSearch = () => {
    /* If the search is not empy, get results from localStorage, if they're not in local storage fetch it from the backend. Otherwise, clear the results */
    if (search) {
      if (!getResultsFromLocal()) {
        fetchResults(search);
      }
    } else {
      d_clearRecipes();
    }
  };

  return (
    <div
      id="home"
      className={`section sect-1 ${recipes.length > 0 ? "show" : ""}`}
    >
      <h1 id="main-title" className="heading">
        Gingerbread
      </h1>
      <SearchBox />
      {recipes.length > 0 && <SearchResults showStatic={noResultsFound} />}
      {activeRecipe.title && <RecipeDetails />}
    </div>
  );
};

const generateStaticData = () => {
  const dataList = [
    { title: "Gingerbread Cookies", image: GingerBreadImage0 },
    { title: "Gingerbread Cookies", image: GingerBreadImage1 },
    { title: "Gingerbread Cookies", image: GingerBreadImage2 },
    { title: "Gingerbread Cookies", image: GingerBreadImage3 },
    { title: "Gingerbread Cookies", image: GingerBreadImage4 },
    { title: "Gingerbread Cookies", image: GingerBreadImage5 },
  ];
  return dataList;
};

export default connect(
  ({ search, recipes, activeRecipe }) => ({ search, recipes, activeRecipe }),
  {
    d_populateRecipes: populateRecipes,
    d_addToRecipes: addToRecipes,
    d_clearRecipes: clearRecipes,
  }
)(Home);

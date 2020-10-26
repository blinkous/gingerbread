import React, { useEffect } from "react";
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

const Home = ({
  search,
  recipes,
  activeRecipe,
  d_populateRecipes,
  d_clearRecipes,
}) => {
  const getData = async (searchQuery) => {
    try {
      const response = await fetch(`/api/recipes/${searchQuery}`);
      const body = await response.json();
      console.log("Fetched query results and got:", body);

      if (body.length > 0) {
        addToLocalStorage(searchQuery, body);
        d_populateRecipes(body);
      } else {
        displayStaticData();
      }
    } catch (e) {
      console.log("Unable to fetch recipes", e);
      displayStaticData();
    }
  };

  useEffect(() => {
    console.log("Active Recipe has changed to", activeRecipe);
  }, [activeRecipe]);

  useEffect(() => {
    onSearch();
  }, [search]);

  const displayStaticData = () => {
    const noResults = "no_results";
    const localStorageStatic = getFromLocalStorage(noResults);

    if (localStorageStatic) {
      d_populateRecipes(localStorageStatic);
    } else {
      console.log("Generated static data");
      const staticData = generateStaticData();
      d_populateRecipes(staticData);
      addToLocalStorage(noResults, staticData);
    }
  };

  const onSearch = () => {
    if (search) {
      const localStorageRecipes = getFromLocalStorage(search);

      if (localStorageRecipes) {
        console.log("Found query results in local storage");
        d_populateRecipes(localStorageRecipes);
      } else {
        getData(search);
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
      {recipes.length > 0 && <SearchResults />}
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

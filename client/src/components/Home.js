import React, { useState } from "react";
import "../styles/Home.css";
import RecipeCard from "./RecipeCard";
import SearchBox from "./SearchBox";
import GingerBreadImage from "../images/gingerbread-cookies.jpg";

export default function Home() {
  const [data, setData] = useState([]);

  const testData = {
    title: "Gingerbread Cookies",
    image: GingerBreadImage,
  };

  const getData = async (searchQuery) => {
    try {
      const response = await fetch(`/api/recipes/${searchQuery}`);
      const body = await response.json();
      console.log(body);
      setData(body);
    } catch (e) {
      console.log("Unable to fetch recipes", e);
    }
  };

  const onSearch = (value) => {
    if (value === "") {
      setData([]);
    } else {
      getData(value);
    }
  };

  return (
    <div
      id="home"
      className={`section sect-1 ${data.length > 0 ? "show" : ""}`}
    >
      <h1 id="main-title" className="heading">
        Gingerbread
      </h1>
      <SearchBox onSearch={onSearch} />
      {data.length > 0 && (
        <div className="results">
          {data.map(({ image, title }, index) => (
            <RecipeCard title={title} image={image} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import "../styles/Home.css";
import RecipeCard from "./RecipeCard";
import SearchBox from "./SearchBox";
import GingerBreadImage from "../images/gingerbread-cookies.jpg";

export default function Home() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

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
    console.log("Received Input: ", value);
    // getData(value);
    setShow((p) => !p);
  };

  return (
    <div id="home" className={`section sect-1 ${show ? "show" : ""}`}>
      <h1 id="main-title" className="heading">
        Gingerbread
      </h1>
      <SearchBox onSearch={onSearch} />
      {/* {data !== undefined &&
        data.map(({ image, title }, index) => (
          <RecipeCard title={title} image={image} key={index} />
        ))} */}

      {show && (
        <div className="results">
          <RecipeCard title={testData.title} image={testData.image} />
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import "../styles/Home.css";
import SearchBox from "./SearchBox";

export default function Home() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

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
      {/* <h3 className="heading">Recipe of the Day</h3> */}
      {data !== undefined &&
        data.map((el, index) => (
          <div className="recipe-card" key={index}>
            <h5 className="heading">{el.title}</h5>
            <img src={el.image} alt={el.title} />
          </div>
        ))}
    </div>
  );
}

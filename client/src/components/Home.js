import React, { useState } from "react";
import "../styles/Home.css";
import RecipeCard from "./RecipeCard";
import SearchBox from "./SearchBox";
import GingerBreadImage0 from "../images/gingerbread-cookies-0.jpg";
import GingerBreadImage1 from "../images/gingerbread-cookies-1.jpg";
import GingerBreadImage2 from "../images/gingerbread-cookies-2.jpg";
import GingerBreadImage3 from "../images/gingerbread-cookies-3.jpg";
import GingerBreadImage4 from "../images/gingerbread-cookies-4.jpg";
import GingerBreadImage5 from "../images/gingerbread-cookies-5.jpg";
import { connect } from "react-redux";

const Home = ({ search }) => {
  const [data, setData] = useState([]);
  const [displayNoResultMessage, setDisplayNoResultMessage] = useState(false);

  const getData = async (searchQuery) => {
    try {
      const response = await fetch(`/api/recipes/${searchQuery}`);
      const body = await response.json();
      console.log(body);

      if (body.length > 0) {
        displayNoResultMessage && setDisplayNoResultMessage(false);
        setData(body);
      } else {
        displayStaticData();
      }
    } catch (e) {
      console.log("Unable to fetch recipes", e);
      displayStaticData();
    }
  };

  const displayStaticData = () => {
    !displayNoResultMessage && setDisplayNoResultMessage(true);
    setData(generateStaticData());
  };

  const onSearch = () => {
    if (search) {
      getData(search);
    } else {
      setData([]);
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
      <SearchBox onSubmit={onSearch} />
      {data.length > 0 && (
        <div className="results">
          {displayNoResultMessage && (
            <p className="no-results">
              No results were found, but here are some Gingerbread Cookies
              &hearts;
            </p>
          )}
          {data.map(({ image, title }, index) => (
            <RecipeCard title={title} image={image} key={index} />
          ))}
        </div>
      )}
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

export default connect((state) => ({ search: state.search }))(Home);

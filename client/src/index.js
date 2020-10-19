import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

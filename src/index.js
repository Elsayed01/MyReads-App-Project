// import important packages like react,react-dom to render the app and
// react-router-dom to use BrowserRouter to route between my components
// import the App from the app component to render it on the root element

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // wrapping my App with the BrowserRouter to be able to use Route later
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

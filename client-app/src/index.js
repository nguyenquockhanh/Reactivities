import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/style.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { ActivityProvider } from "./app/contexts";

ReactDOM.render(
  <ActivityProvider>
    <App />
  </ActivityProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

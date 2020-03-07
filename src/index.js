import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./client/helpers";
import { App } from "./client/app";
//import { Login } from "./client/login";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./client/helpers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App } from "./client/app";
import { Login } from "./client/login";

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

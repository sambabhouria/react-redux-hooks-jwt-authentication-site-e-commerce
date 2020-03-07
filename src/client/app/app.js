import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../helpers";
import { alertActions } from "../actions";
import { Home } from "../home";
import { Login } from "../login";
import { Signup } from "../signup";
import { PrivateRoute } from "../pivate";

import "./App.css";

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from "../authentication/auth-helper-methods";
//Our higher order component
import WithAuth from "../authentication/with-auth";

import NavBar from "../nav-bar/nav-bar";

function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  // _handleLogout = () => {
  //   this.Auth.logout();
  //   this.props.history.replace("/login");
  // };

  return (
    <div className="App">
      <div className="App">
        <div className="main-page">
          <div>
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export { App };

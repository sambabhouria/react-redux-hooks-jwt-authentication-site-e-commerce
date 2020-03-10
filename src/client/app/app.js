import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { history } from "../helpers";
import { alertActions } from "../actions";
import { Home } from "../home";
import { Login } from "../login";
import { Signup } from "../signup";
import { PrivateRoute } from "../pivate";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

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

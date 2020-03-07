import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthHelperMethods from "../authentication/auth-helper-methods";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const Auth = new AuthHelperMethods();
  console.log("TCL: PrivateRoute -> rest", Auth.loggedIn());

  return (
    <Route
      {...rest}
      render={props =>
        Auth.loggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

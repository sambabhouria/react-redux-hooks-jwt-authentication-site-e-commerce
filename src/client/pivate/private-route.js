import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import AuthHelperMethods from "../authentication/auth-helper-methods";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const Auth = new AuthHelperMethods();

  const loggedIn = useSelector(state => state.authentication.loggedIn);

  const isLogged = Auth.loggedIn();

  useEffect(() => {
    console.log(
      "TCL: PrivateRoute -> loggedIn->isLogged =====>",
      loggedIn,
      isLogged
    );
  }, [loggedIn, isLogged]);

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn && isLogged ? (
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

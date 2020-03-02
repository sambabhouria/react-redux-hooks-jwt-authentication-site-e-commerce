import { userConstants } from "../constants";
import { userService } from "../servives";
import AuthHelperMethods from "../authentication/auth-helper-methods";
import { alertActions } from "./";
import { history } from "../helpers";
import axios from "axios";
export const userActions = {
  login,
  logout,
  getAll
};

function login(username, password) {
  /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */

  return dispatch => {
    new AuthHelperMethods()
      .login(username, password)
      .then(res => {
        if (res.success === false) {
          return alert("Sorry those credentials don't exist!");
        }
        if (res.success === true) {
          const user = {
            username,
            token: res.token
          };

          dispatch(success(user));
          history.push("/");
        }
      })
      .catch(err => {
        dispatch(failure(err));
      });
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll().then(
      users => dispatch(success(users)),
      error => dispatch(failure(error))
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

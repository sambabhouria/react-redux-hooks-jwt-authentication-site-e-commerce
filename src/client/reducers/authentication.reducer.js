import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: false, error: null, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: false,
        error: null,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        error: null,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        error: action.error
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loggingIn: false
      };
    default:
      return state;
  }
}

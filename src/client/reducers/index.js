import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { cartCounter } from "./cart.counter.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  cartCounter,
});

export default rootReducer;

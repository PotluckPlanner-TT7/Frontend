import { combineReducers } from "redux";

import { loginReducer as login } from "./../reducer/loginReducer";

const combinedReducer = combineReducers({
  login,
});
export default combinedReducer;

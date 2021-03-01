import { combineReducers } from "redux";

import { loginReducer as login } from "./../reducer/loginReducer";
import { potluckReducer as potluck } from "./potluckReducer";

const combinedReducer = combineReducers({
  login,
  potluck,
});
export default combinedReducer;

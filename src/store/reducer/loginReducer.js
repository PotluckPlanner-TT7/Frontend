import {
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  SIGN_OUT,
} from "../actions/loginActions";

const initialValue = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : {
      userData: {},
      error: "",
      loadingData: false,
      isLoggedIn: false,
    };

export const loginReducer = (state = initialValue, action) => {
  console.log(action);

  switch (action.type) {
    case LOG_IN_START:
      return {
        ...state,
        loadingData: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: "",
        loadingData: false,
        isLoggedIn: true,
      };
    case LOG_IN_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingData: false,
      };
    case SIGN_OUT: //complete reset of state to initialValue
      return {
        userData: "",
        error: "",
        loadingData: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

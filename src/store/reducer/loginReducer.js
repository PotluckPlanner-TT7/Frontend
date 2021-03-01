import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAIL } from "../actions/loginActions"

const initialValue = {
  userData: "",
  error: "",
  loadingData: false,
};

export const loginReducer = (state = initialValue, action) => {
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
      }
    case LOG_IN_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingData: false
      }
    default:
      return state;
  }
};

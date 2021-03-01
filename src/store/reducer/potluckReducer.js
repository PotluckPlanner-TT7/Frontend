import {
  LOAD_POTLUCKS,
  SET_POTLOCKS_SUCCESS,
  SET_ERROR,
} from "./../actions/potluckAction";

const initialValue = {
  potluckData: "",
  error: "",
  loadingPotluckData: false,
};

export const potluckReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOAD_POTLUCKS:
      return {
        ...state,
        loadingPotluckData: true,
      };
    case SET_POTLOCKS_SUCCESS:
      return {
        ...state,
        potluckData: action.payload,
        error: "",
        loadingPotluckData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loadingPotluckData: false,
      };
    default:
      return state;
  }
};

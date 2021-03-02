import {
  LOAD_POTLUCKS,
  SET_POTLUCKS_SUCCESS,
  SET_ERROR,
} from "./../actions/potluckAction";

const initialValue = {
  potluckData: [{
    id: Date.now(),
    title: "something",
    date: "",
    location: "place",
    description: "some place somewhere",
    guests: ["me", "myself", "I"],
    creator: " ",
    itemsRequested: []
  }],

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
    case SET_POTLUCKS_SUCCESS:
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

import {
  LOAD_POTLUCKS,
  SET_POTLUCKS_SUCCESS,
  SET_ERROR,
  ADD,
  ORGANIZER_POTLUCK
} from "./../actions/potluckAction";

const initialValue = {
  potluckData: [{
    organizer_id: "",
    potluck_title: "something",
    potluck_date: "",
    potluck_time: "",
    potluck_location: "place",
    potluck_description: "some place somewhere",
    // guests: ["me", "myself", "I"],
    // creator: " ",
    // itemsRequested: []
  }],
  myPotLuckData: [{
    organizer_id: "",
    potluck_title: "something",
    potluck_date: "03/04/2021",
    potluck_time: "15:00",
    potluck_location: "place",
    potluck_description: "some place somewhere",
    // guests: ["me", "myself", "I"],
    // creator: " ",
    // itemsRequested: []
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
    case ADD:
      return {
        ...state,
        myPotLuckData: [...state.myPotLuckData, action.payload ],
        error: "",
        loadingPotluckData: false,
      }
    case ORGANIZER_POTLUCK:
      return {
        ...state,
        myPotLuckData: action.payload,
        error: "",
        loadingPotLuckData: false,
      }
    default:
      return state;
  }
};

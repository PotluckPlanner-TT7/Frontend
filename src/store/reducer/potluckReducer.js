import {
  LOAD_POTLUCKS,
  SET_POTLUCKS_SUCCESS,
  SET_ERROR,
  UPDATE_POTLUCK,
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
  myPotLuckData: [{
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
  console.log(action)
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
    case UPDATE_POTLUCK:
      return {
        ...state,
        myPotLuckData: [...state.myPotLuckData.map(potluck => {
          if(potluck.id === action.payload.id){
            return action.payload
          } else{
            return potluck
          }
        })],
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

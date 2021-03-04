//axios with auth
import { axiosWithAuth } from "./../../utils/axiosWithAuth";
export const LOAD_POTLUCKS = "LOAD_POTLUCKS";
export const SET_POTLUCKS_SUCCESS = "SET_POTLUCKS_SUCCESS";
export const SET_ERROR = "SET_ERROR";
export const ADD = "ADD";
export const ORGANIZER_POTLUCK = "ORGANIZER_POTLUCK";

export const getPotluckData = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_POTLUCKS });
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        localStorage.setItem(
          "potluckData",
          JSON.stringify({
            potluckData: res.data,
            error: "",
            loadingPotluckData: false,
          })
        );
        dispatch({ type: SET_POTLUCKS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
};

export const addPotLuck = (newPotLuck) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("/potlucks", newPotLuck)
      .then((res) => {
        console.log("Post request", res.data);
        dispatch({ type: ADD, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
};

export const getOrganizerPotLuck = (userID) => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/potlucks/organizer/${userID}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: ORGANIZER_POTLUCK, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
};

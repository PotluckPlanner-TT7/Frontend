//axios with auth
import axios from "axios";
import { axiosWithAuth } from "./../../utils/axiosWithAuth";
export const LOAD_POTLUCKS = "LOAD_POTLUCKS";
export const SET_POTLUCKS_SUCCESS = "SET_POTLUCKS_SUCCESS";
export const SET_ERROR = "SET_ERROR";

export const getPotluckData = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_POTLUCKS });
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        console.log(res.data);
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

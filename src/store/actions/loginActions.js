import axios from "axios";
export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";
export const SIGN_OUT = "SIGN_OUT";

export const setUserData = (loginVal) => {
  return (dispatch) => {
    dispatch({ type: LOG_IN_START });
    axios
      .post(`https://potluckapi.herokuapp.com/api/login`, loginVal)
      .then((res) => {
        localStorage.setItem("token", res.data.id);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userData: res.data,
            error: "",
            loadingData: false,
          })
        );
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_FAIL, payload: err });
      });
  };
};

export const signout = () => {
  return {
    type: SIGN_OUT,
  };
};

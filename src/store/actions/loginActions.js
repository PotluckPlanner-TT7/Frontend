import axios from "axios";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

export const startSuccess = (userData) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: userData,
  };
};

export const startFail = (error) => {
  return {
    type: LOG_IN_FAIL,
    payload: error,
  };
};

export const setUserData = (loginVal) => {
  return (dispatch) => {
    dispatch({ type: LOG_IN_START });
    axios
      .post(`https://potluckapi.herokuapp.com/api/login`, loginVal)
      .then((res) => {
        console.log(res.data);
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
      });
  };
};

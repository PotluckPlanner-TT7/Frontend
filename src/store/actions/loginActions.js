import { bindActionCreators } from "redux";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

export const startLogin = () => {
    return {
        type: LOG_IN_START
    }
}

export const startSuccess = (userData) => {
    return {
        type: LOG_IN_SUCCESS,
        payload: userData 
    }
}

export const startFail = (error) => {
    return {
        type: LOG_IN_FAIL,
        payload: error
    }
}


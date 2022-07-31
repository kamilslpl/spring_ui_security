import {AUTH_LOGIN, AUTH_LOGIN_START} from "./ActionTypes";

export const authorizationStart = () => {
    return {
        type: AUTH_LOGIN_START
    }
}

export const authenticateUser = (authorizationRequest) => {
    return dispatch => {
        dispatch(authorizationStart());
    }

}
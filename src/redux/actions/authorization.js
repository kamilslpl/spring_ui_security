import {
    AUTH_LOGIN,
    AUTH_LOGIN_CHECK,
    AUTH_LOGIN_FAIL,
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT
} from "./ActionTypes";
import connection from "../../axios/axios";

export const authorizationStart = () => {
    return {
        type: AUTH_LOGIN_START
    }
}

export const checkStorageAuthentication = () =>{
    return{
        type:AUTH_LOGIN_CHECK
    }
}

export const authorizationLogout = () =>{
    return{
        type:AUTH_LOGOUT
    }
}

export const authorizationSuccess = (token, roles) => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        token: token,
        roles: roles,
    }
}

export const authorizationFail = () => {
    return {
        type: AUTH_LOGIN_FAIL
    }
}

export const authenticateUser = (authorizationRequest) => {
    return dispatch => {
        dispatch(authorizationStart());

        //wysylanie
        connection.post("/login", authorizationRequest)
            .then((data) => {
                console.log("Takie rzeczy, udalo sie ;)")

                const token = data.headers["authorization"]
                const roles = data.headers["app_roles"]

                dispatch(authorizationSuccess(token, roles))
                console.log(data)
            })
            .catch((error) => {
                console.log("Fuckup jakis, nie dziala")
                console.log(error)

                dispatch(authorizationFail())
            });
    }

}
import {AUTH_LOGIN_FAIL, AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS} from "../actions/ActionTypes";

const updateObject =(oldObject, updateObject) => {
    return {
        ...oldObject,
        ...updateObject
    }
}
// src/main/java/pl/sda/arppl4/spring/security/config/jwt/AuthenticatioFilter.java
// linia 98-101
const initalState = {
    token: null,
    roles: null,
    //
    error:null,
    loading:false /*Czy obecnie trwa logowanie*/
}
const handleAuthorizationStart = (state) => {
    console.log("aktualizuje stan auth start")
    return updateObject(state, {loading: true})
}

const handleAuthorizationSuccess = (state, action) => {
    console.log("aktualizuje stan auth success")
    return updateObject(state, {
        token: action.token,
        roles: action.roles,
        loading: false
    })
}

const handleAuthorizationFail = (state) => {
    console.log("aktualizuje stan auth fail")
    return updateObject(state, {
        token: null,
        roles: null,
        loading: false
    })
}


// pod wplywem przeslanej akcji aktualizuj stan
const reducer = (state = initalState, action) => {
        switch (action.type) {
            case AUTH_LOGIN_START:
                return handleAuthorizationStart(state);
            case AUTH_LOGIN_SUCCESS:
                    return handleAuthorizationSuccess(state, action);
            case AUTH_LOGIN_FAIL:
                return handleAuthorizationFail(state);
            default:
                return state;
        }
}
export default reducer;
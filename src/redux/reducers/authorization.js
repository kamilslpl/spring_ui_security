import {
    AUTH_LOGIN_CHECK,
    AUTH_LOGIN_FAIL,
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT
} from "../actions/ActionTypes";

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

const LocalStorageAuthItemTokenKey = "LocalStorageAuthItemTokenKey";
const LocalStorageAuthItemRolesKey = "LocalStorageAuthItemRolesKey";

const handleAuthorizationStart = (state) => {
    console.log("aktualizuje stan auth start")
    return updateObject(state, {loading: true})
}

const handleAuthorizationSuccess = (state, action) => {
    console.log("aktualizuje stan auth success")
    localStorage.setItem(LocalStorageAuthItemTokenKey, action.token);
    localStorage.setItem(LocalStorageAuthItemRolesKey, action.roles);
    return updateObject(state, {
        token: action.token,
        roles: action.roles,
        loading: false
    })
}

const handleAuthorizationFail = (state) => {
    console.log("aktualizuje stan auth fail")
    localStorage.removeItem(LocalStorageAuthItemTokenKey);
    localStorage.removeItem(LocalStorageAuthItemRolesKey);
    return updateObject(state, {
        token: null,
        roles: null,
        loading: false
    })
}

const handleAuthorizationCheck = (state) => {
    const token = localStorage.getItem(LocalStorageAuthItemTokenKey);
    const roles = localStorage.getItem(LocalStorageAuthItemRolesKey);
    if (token !==null && roles !== null){
        return updateObject(state, {
            token: token,
            roles: roles

        })
    }return state;
}

const handleAuthorizationLogout = (state) =>{
    localStorage.removeItem(LocalStorageAuthItemTokenKey);
    localStorage.removeItem(LocalStorageAuthItemRolesKey);
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
            case AUTH_LOGIN_CHECK:
                return handleAuthorizationCheck(state);
            case AUTH_LOGOUT:
                return handleAuthorizationLogout(state);
            default:
                return state;
        }
}
export default reducer;
import {AUTH_LOGIN_START} from "../actions/ActionTypes";

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


// pod wplywem przeslanej akcji aktualizuj stan
const reducer = (state = initalState, action) => {
        switch (action.type) {
            case AUTH_LOGIN_START:
                return handleAuthorizationStart(state);
            default:
                return state;
        }
}

export default reducer;
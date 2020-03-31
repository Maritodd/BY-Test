import {loginAPI} from "../components/api/api";

import {getUser, removeToken, removeUser, setToken, setUser} from "../lib/auth";

const SET_USER_DATA = 'SET_USER_DATA';
const LOG_OUT = 'LOG_OUT';

let initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.user,
            };
        case LOG_OUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (user) => ({ type: SET_USER_DATA,  user: user});
export const deleteUserData = () => ({type: LOG_OUT});


export const login = (identifier, password) => {
    return (dispatch) => {
        loginAPI.login(identifier, password).then(response => {
            console.log(response.user);
            console.log(response.jwt);
            dispatch(setAuthUserData(setUser(response.user)));
            console.log(response.user);
            console.log(response.jwt);
            // window.location = '/course';
        });
    }
};

export function logOut() {
    return async (dispatch) => {
        removeUser();
        removeToken();
        dispatch(deleteUserData);
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        const user = getUser();
        dispatch({type: SET_USER_DATA, user});
    };
};

export default authReducer;

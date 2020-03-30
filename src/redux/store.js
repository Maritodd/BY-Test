import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer } from 'redux-form';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import classReducer from "./class-reducer";
import {setTokenToDefaults} from "../lib/auth";

setTokenToDefaults();

let reducers = combineReducers({
        form: formReducer,
        auth: authReducer,
        class: classReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

import {combineReducers} from "redux";
import helloReducer from "./helloReducers";
import welcomeReducer from "./welcomeReducers";

export default combineReducers({helloReducer, welcomeReducer});
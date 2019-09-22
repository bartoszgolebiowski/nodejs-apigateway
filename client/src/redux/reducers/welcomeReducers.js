import {ADD_WELCOME, SET_WELCOME} from "../actionTypes";

const initialState = {
    welcomes: [{author: 'test', title: 'title'}]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WELCOME: {
            return {
                ...state
            };
        }
        case SET_WELCOME: {
            return {
                welcomes: [...state.welcomes, ...action.payload]
            }
        }
        default:
            return state;
    }
};


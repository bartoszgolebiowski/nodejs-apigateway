import {ADD_HELLO, SET_HELLO} from "../actionTypes";

const initialState = {
    hellos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_HELLO: {
            return {
                ...state
            };
        }
        case SET_HELLO: {
            return {
                hellos: [...state.hellos, ...action.payload]
            }
        }
        default:
            return state;
    }
};

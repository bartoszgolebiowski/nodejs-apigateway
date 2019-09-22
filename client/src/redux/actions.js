import {ADD_HELLO, ADD_WELCOME, SET_HELLO, SET_WELCOME} from "./actionTypes";

export const addHello = content => ({
    type: ADD_HELLO,
    payload: content
});

export const addWelcome = content => ({
    type: ADD_WELCOME,
    payload: content
});

export const setHellos = content => {
    return {
        type: SET_HELLO,
        payload: content
    };
};

export const setWelcomes = content => {
    return {
        type: SET_WELCOME,
        payload: content
    };
};


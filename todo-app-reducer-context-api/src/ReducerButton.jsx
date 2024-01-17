import React, { useState, useReducer } from 'react';

const increment = () => {
    return {type: "INCREMENT"};
};

const decrement = () => {
    return {type: "DECREMENT"};
};

const buttonReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {counter: state.counter + 1};
        case "DECREMENT":
            return {counter: state.counter - 1};
        default:
            return state;
    }
};

const initialState = {counter: 0};

const ReducerButton = () => {
    const [state, dispatch] = useReducer(buttonReducer, initialState);
    const { counter } = state;

    return (
        <button onClick={() => dispatch(increment())}>
        Reduce Count: {counter}
        </button>
    );
};

export default ReducerButton;
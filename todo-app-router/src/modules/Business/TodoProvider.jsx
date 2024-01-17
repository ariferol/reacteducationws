import React, { createContext, useReducer } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case "GET_TODOS_START":
            return {
                ...state,
                loading: true,
            };
        case "GET_TODOS_SUCCESS":
            return {
                ...state,
                todos: action.payload,
            };
        case "GET_TODOS_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const getAllTodos = () => {
        dispatch({ type: "GET_TODOS_START" });
        fetch(process.env.SERVICE_ENDPOINT + "/todos")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "GET_TODOS_SUCCESS", payload: data });
            })
            .catch((error) => {
                dispatch({ type: "GET_TODOS_ERROR", payload: error });
            });
    };

    return (
        <TodoContext.Provider value={{ getAllTodos, state }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };

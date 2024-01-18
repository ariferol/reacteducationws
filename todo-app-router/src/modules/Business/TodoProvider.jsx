import React, { createContext, useReducer } from "react";
import { getAll, get, post, put, remove } from "./TodoService";

const TodoContext = createContext();

const actionEnum = {
    GETALL_TODOS_START: "GETALL_TODOS_START",
    GETALL_TODOS_SUCCESS: "GETALL_TODOS_SUCCESS",
    GETALL_TODOS_ERROR: "GETALL_TODOS_ERROR",
    POST_TODOS_START: "POST_TODOS_START",
    POST_TODOS_SUCCESS: "POST_TODOS_SUCCESS",
    POST_TODOS_ERROR: "POST_TODOS_ERROR",
    DELETE_TODOS_START: "DELETE_TODOS_START",
    DELETE_TODOS_SUCCESS: "DELETE_TODOS_SUCCESS",
    DELETE_TODOS_ERROR: "DELETE_TODOS_ERROR",
    GET_TODOS_START: "GET_TODOS_START",
    GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
    GET_TODOS_ERROR: "GET_TODOS_ERROR",
    PUT_TODOS_START: "PUT_TODOS_START",
    PUT_TODOS_SUCCESS: "PUT_TODOS_SUCCESS",
    PUT_TODOS_ERROR: "PUT_TODOS_ERROR",
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case actionEnum.GETALL_TODOS_START:
            return {
                ...state,
                loading: true,
            };
        case actionEnum.GETALL_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
            };
        case actionEnum.GETALL_TODOS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case actionEnum.POST_TODOS_START:
            return {
                ...state,
                loading: true,
            };
        case actionEnum.POST_TODOS_SUCCESS:
            return {
                ...state,
            };
        case actionEnum.POST_TODOS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case actionEnum.DELETE_TODOS_START:
            return {
                ...state,
                loading: true,
            };
        case actionEnum.DELETE_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionEnum.DELETE_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionEnum.PUT_TODOS_START:
            return {
                ...state,
                loading: true,
            };
        case actionEnum.PUT_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionEnum.PUT_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionEnum.GET_TODOS_START:
            return {
                ...state,
                loading: true,
            };
        case actionEnum.GET_TODOS_SUCCESS:
            return {
                ...state,
                todo: action.payload,
                loading: false,
            };
        case actionEnum.GET_TODOS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

const initialState = {
    todos: [],
    loading: false,
    error: null,
    todo: null,
};

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const getAllTodos = async () => {
        dispatch({ type: actionEnum.GETALL_TODOS_START });

        try {
            const data = await getAll();
            dispatch({ type: actionEnum.GETALL_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionEnum.GETALL_TODOS_ERROR, payload: error });
        }
    };

    const addTodo = async (todo) => {
        dispatch({ type: actionEnum.POST_TODOS_START });

        try {
            const data = await post(todo);
            dispatch({ type: actionEnum.POST_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionEnum.POST_TODOS_ERROR, payload: error });
        }
    };

    const deleteTodo = async (id) => {
        dispatch({ type: actionEnum.DELETE_TODOS_START });

        try {
            const data = await remove(id);
            dispatch({ type: actionEnum.DELETE_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionEnum.DELETE_TODOS_ERROR, payload: error });
        }
    };

    const putTodo = async (id, todo) => {
        dispatch({ type: actionEnum.PUT_TODOS_START });

        try {
            const data = await put(id, todo);
            dispatch({ type: actionEnum.PUT_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionEnum.PUT_TODOS_ERROR, payload: error });
        }
    };

    const getTodo = async (id) => {
        dispatch({ type: actionEnum.GET_TODOS_START });

        try {
            const data = await get(id);
            dispatch({ type: actionEnum.GET_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionEnum.GET_TODOS_ERROR, payload: error });
        }
    };

    return (
        <TodoContext.Provider
            value={{
                getAllTodos,
                getTodo,
                addTodo,
                putTodo,
                deleteTodo,
                state,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };

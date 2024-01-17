import React, { createContext, useReducer } from "react";
import { getAll, post, put, remove } from "./TodoService";

const TodoContext = createContext();

const actionEnum = {
    GETALL_TODOS_START: "GETALL_TODOS_START",
    GETALL_TODOS_SUCCESS: "GETALL_TODOS_SUCCESS",
    GETALL_TODOS_ERROR: "GETALL_TODOS_ERROR",
    POST_TODOS_START: "POST_TODOS_START",
    POST_TODOS_SUCCESS: "POST_TODOS_SUCCESS",
    POST_TODOS_ERROR: "POST_TODOS_ERROR",
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

    return (
        <TodoContext.Provider value={{ getAllTodos, addTodo, state }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };

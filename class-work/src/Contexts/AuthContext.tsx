import React, { createContext, useReducer } from "react";
import {User} from "../Services/User";
import {login, getToken, saveToken, saveUser} from "../Services/Login";

enum AuthActionType {
    LOGIN_BEGIN = "LOGIN_BEGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    GET_TOKEN = "GET_TOKEN",
};

type AuthState = {
    token: string | null,
    user: User | null
};

const AuthContext = createContext(null);
const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case AuthActionType.LOGIN_BEGIN:
            return {
                ...state,
                loading: true,
            };
            case AuthActionType.LOGIN_SUCCESS:
            return {
                ...state,
                todos: action.payload,
            };
            case AuthActionType.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
            };
            case AuthActionType.GET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};

const initialState: AuthState = {
    token: null,
    user: null
};

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const postLogin = async (username: string, password: string) => {
        dispatch({ type: AuthActionType.LOGIN_BEGIN });
        try {
            const result = await login({ username: username, password: password});
            saveToken(result.token);
            saveUser(result);
            dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: result });
            dispatch({ type: AuthActionType.GET_TOKEN, payload: getToken() });
        } catch (error) {
            dispatch({ type: AuthActionType.LOGIN_ERROR, payload: {} });
        }
    };

    const getUserToken = () => {
        dispatch({ type: AuthActionType.GET_TOKEN, payload: getToken() });
    };

    return (
        <AuthContext.Provider value={{ postLogin, getUserToken, state }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

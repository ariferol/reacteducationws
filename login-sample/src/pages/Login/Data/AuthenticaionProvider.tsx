import React, { createContext, useReducer } from "react";
import { AuthenticaionState, LoginModel } from "../Types";
import { setUserSession, getUserSession, postLogin } from "./AuthenticationService";

const initialState: AuthenticaionState = {
    response: null,
    error: null,
    loading: false,
    isAuthenticated: getUserSession() ? true : false,
};

const authenticaionReducer = (state: AuthenticaionState, action: any) => {
    switch (action.type) {
        case "LOGIN_BEGIN":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                response: action.payload,
                loading: false,
                error: null,
                isAuthenticated: true
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const AuthenticaionContext = createContext(null);

const AuthenticaionProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authenticaionReducer, initialState);

    const login = async (username: string, password: string) => {
        dispatch({ type: "LOGIN_BEGIN" });

        try {
            const loginModel: LoginModel = {
                username,
                password,
            };
            const user = await postLogin(loginModel);
            setUserSession(user);
            dispatch({ type: "LOGIN_SUCCESS", payload: user });
        } catch (error) {
            dispatch({ type: "LOGIN_FAILED", payload: error.message });
        }
    };

    return (
        <AuthenticaionContext.Provider value={{ state, login }}>
            {children}
        </AuthenticaionContext.Provider>
    );
};

export { AuthenticaionContext, AuthenticaionProvider };

import { TLoginModel } from "../Types/Login";

const login = async (model: TLoginModel) => {
    const response = await fetch(process.env.AUTH_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(model),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

const saveUser = (user: string) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
};

const removeUser = () => {
    sessionStorage.removeItem("user");
};

const saveToken = (token: string) => {
    sessionStorage.setItem("token", token);
};

const getToken = () => {
    return sessionStorage.getItem("token");
};

const removeToken = () => {
    sessionStorage.removeItem("token");
};

export {
    login,
    getToken,
    saveToken,
    removeToken,
    saveUser,
    getUser,
    removeUser,
};

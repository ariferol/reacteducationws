import { LoginModel, LoginResponse } from "../Types";

const postLogin = async (model: LoginModel): Promise<LoginResponse> => {
    const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
            username: model.username,
            password: model.password,
            expiresInMins: 60,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }) as Response;

    if(response.ok) {
        return await response.json();
    }

    else {
        throw new Error("Login failed.");
    }
};

const setUserSession = (user: any) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};

const removeUserSession = () => {
    sessionStorage.removeItem("user");
};

const getUserSession = () => {
    return sessionStorage.getItem("user");
};

export { setUserSession, removeUserSession, getUserSession, postLogin };

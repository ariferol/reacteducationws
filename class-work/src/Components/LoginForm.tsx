import React, { FormEvent, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const LoginForm = () => {
    const { postLogin } = useContext(AuthContext);

    const onSubmit = async (e: FormEvent) => {
        // NOTE: username kminchelle, password: 0lelplR
        const formData = new FormData(e.target as HTMLFormElement);
        e.preventDefault();

        await postLogin(
            formData.get("username").toString(),
            formData.get("password").toString()
        );
    };

    return (
        <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
            <label htmlFor="username">Email</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button className="btn btn-success" type="submit">
                Login
            </button>
        </form>
    );
};

export default LoginForm;

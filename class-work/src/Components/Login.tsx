import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <section id="login" className="d-flex flex-column vh-100 justify-content-center align-items-center">
            <img className="img-thumbnail" width={200} src={require("../assets/logo192.png")} alt="App Logo" />
            <h1>Login</h1>
            <LoginForm />
        </section>
    );
};

export default Login;

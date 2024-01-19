import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { Error, ErrorType } from "./Components/Error";
import Dashboard from "./Components/Dashboard";
import { AuthContext } from "./Contexts/AuthContext";

const Navigator = () => {
    const { getUserToken, state } = useContext(AuthContext);
    const { token } = state;
    const isAuth = token !== null;

    const PublicRoute = () => {
        return <Route path="/" element={<Login />} />;
    };
    const PrivateRoute = () => {
        return <Route path="/" element={<Dashboard />} />;
    };

    return (
        <BrowserRouter>
            <Routes>
                {isAuth ? PrivateRoute() : PublicRoute()}
                <Route
                    path="*"
                    element={
                        <Error
                            code={ErrorType.NotFound}
                            message="Sayfa Bulunamadı"
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigator;

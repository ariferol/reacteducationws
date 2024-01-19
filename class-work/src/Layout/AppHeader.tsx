import * as React from "react";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
    const navigate = useNavigate();
    const onHomeClicked = (e: any) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" onClick={onHomeClicked}>
                        Kişi Listesi
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;

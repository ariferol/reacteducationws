import React from "react";
import { useNavigate } from "react-router-dom";

enum ErrorType {
    NotFound = "404",
    InternalServerError = "500",
    BadRequest = "400",
    UnAuth = "401",
}

type ErrorModel = {
    code: ErrorType;
    message: string;
};

const Error = (model: ErrorModel) => {
    const navigate = useNavigate();
    return (
        <section
            id="error"
            className="d-flex flex-column vh-100 justify-content-center align-items-center"
        >
            <div className="card text-center" style={{width: 300, height: 200}}>
                <div className="card-body">
                    <h3 className="card-title text-danger pt-4">{model.code}</h3>
                    <p className="card-text">{model.message}</p>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => navigate("/")}
                    >
                        Geri
                    </button>
                </div>
            </div>
        </section>
    );
};

export { Error, ErrorType, ErrorModel };

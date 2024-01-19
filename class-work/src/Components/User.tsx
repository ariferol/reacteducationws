import * as React from "react";

const User = ({
    firstName,
    lastName,
    age,
}: {
    firstName: string;
    lastName: string;
    age: number;
}) => {
    
    return (
        <li className="user">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{firstName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {lastName}
                    </h6>
                    <label>{age}</label>
                </div>
            </div>
        </li>
    );
};

export default User;

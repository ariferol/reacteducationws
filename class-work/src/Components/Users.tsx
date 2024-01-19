import * as React from "react";
import useFetch from "../Hooks/useFetch";
import { User as TUser } from "../Services/User";
import User from "./User";

const Users = () => {
    const [response] = useFetch(process.env.SERVICE_ENDPOINT, null);

    return (
        <div className="row">
            <div className="col-12">
                <h3>Kullanıcı Listesi</h3>
                <ul id="user-list">
                    {response.map((user: TUser) => {
                        console.log(user);
                        
                        return (
                            <User
                                key={user.id}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                age={user.age}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Users;

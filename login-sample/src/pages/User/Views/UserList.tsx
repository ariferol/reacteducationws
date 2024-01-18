import React, { useContext, useEffect } from "react";
import { TUser } from "../Types";
import { UserContext } from "../Data/UserProvider";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const { state, getAllUsers, removeUser } = useContext(UserContext);
    const { users } = state;
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <section className="container">
            <div className="row">
                <div className="col-12 p-4">
                    <div className="row">
                        <div className="col-6">
                            <h1>Kullanıcı Listesi</h1>
                        </div>
                        <div className="col-6 text-end">
                            <button
                                className="btn btn-success"
                                onClick={() => navigate("/kullanici-ekle")}
                            >
                                Ekle
                            </button>
                        </div>
                    </div>
                    <table className="table">
                        <tbody>
                            {users.map((user: TUser) => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td className="text-end">
                                        <button
                                            className="btn btn-warning me"
                                            onClick={() =>
                                                navigate("/" + user.id, {
                                                    state: { user },
                                                })
                                            }
                                            type="button"
                                        >
                                            Kullanıcı Düzenle
                                        </button>
                                    </td>
                                    <td className="text-end">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeUser(user.id)}
                                            type="button"
                                        >
                                            Kullanıcı Sil
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default UserList;

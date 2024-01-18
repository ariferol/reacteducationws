import { TCreateUserResponse, TDeleteResponse, TUser } from "../Types";

const getUsers = async (): Promise<TUser[]> => {
    const response = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

const getUser = async (id: number): Promise<TUser> => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

const createUser = async (user: any): Promise<TUser> => {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return await response.json();
};

const updateUser = async (
    id: number,
    user: any
): Promise<TUser> => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return await response.json();
};

const deleteUser = async (id: number): Promise<TUser> => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

export { getUsers, deleteUser, createUser, updateUser, getUser };

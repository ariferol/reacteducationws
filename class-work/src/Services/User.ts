type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number
};

const getUsers = async (): Promise<User[]> => {
    const response = await fetch(process.env.SERVICE_ENDPOINT);

    const data = await response.json();
    return data.users as User[];
};

export {
    getUsers,
    User
};
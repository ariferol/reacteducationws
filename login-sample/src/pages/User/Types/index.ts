type TUserResponse = {
    users: [];
    total: number;
    limit: number;
};

type TDeleteResponse = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
};

type TCreateUserResponse = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
};

type TUser = {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
};

type TUserState = {
    users: TUser[];
    error: any;
    loading: boolean;
    user?: TUser;
};

export type {
    TUser,
    TUserState,
    TUserResponse,
    TDeleteResponse,
    TCreateUserResponse,
};

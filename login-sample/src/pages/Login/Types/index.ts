type AuthenticaionState = {
    response: any;
    error: any;
    loading: boolean;
    isAuthenticated?: boolean;
};

type LoginResponse = {
    token: string;
    expiresIn: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
};

type LoginModel = {
    username: string;
    password: string;
};

export type { AuthenticaionState, LoginModel, LoginResponse };
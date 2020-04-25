import service from './_base';

//Signup
export const signup = async (formData) => {
    return service.post('auth/signup', formData);
};

//Login
export const login = async (formData) => {
    return service.post('auth/login', formData);
};

//Google Login
export const google = async () => {
    return await service.get('auth/google/login');
};

//Logout
export const logout = async () => {
    return service.post('auth/logout');
};

//Whoami
export const whoami = async () => {
    return await service.get('auth/whoami');
};


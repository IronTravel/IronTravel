import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3005/',
    withCredentials: true
});

//Signup
export const signup = async (formData) => {
    return service.post('auth/signup', formData);
};

//Login
export const login = async (formData) => {
    console.log("hola soy login")
    return service.post('auth/login', formData);
};

//Google Login
export const google = async () => {
    console.log("hola soy google")
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


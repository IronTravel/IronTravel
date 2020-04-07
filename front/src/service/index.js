import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3005/',
    withCredentials: true
});
//AUTH//
export const signup = async (formData) => {
    return service.post('auth/signup', formData);
}

export const login = async (formData) => {
    return service.post('auth/login', formData);
}

export const logout = async () => {
    return service.post('auth/logout');
}

export const whoami = async () => {
    return await service.get('auth/whoami');
}

//DATA//
export const amenities = async () => {
    return await service.get('data/amenities');
}
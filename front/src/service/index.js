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
    console.log("hola soy login")
    return service.post('auth/login', formData);
}

export const logout = async () => {
    return service.post('auth/logout');
}

export const whoami = async () => {
    return await service.get('auth/whoami');
}


export const google = async () => {
    console.log("hola soy google")
    return await service.get('auth/google/login');
}

//DATA//
export const amenities = async () => {
    return await service.get('data/amenities');
}
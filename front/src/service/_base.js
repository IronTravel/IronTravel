import axios from 'axios';

const service = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
});

service.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 403 || error.response.status === 401) {
            window.location.assign('/auth');
        } else {
            return Promise.reject(error);
        }
    }
)

export default service;

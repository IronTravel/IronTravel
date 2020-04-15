import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3005/',
    withCredentials: true
});

export const allUser = async () => {
    return await service.get('/users');
}

export const editUser = async idUser => {
    console.log(idUser)
    return await service.post(`/users/edit/${idUser}`);
}

export const oneUser = async idUser => {
    console.log(idUser)
    return await service.get(`/users/${idUser}`);
}
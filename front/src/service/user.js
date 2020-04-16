import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3005/',
    withCredentials: true
});

export const allUser = async () => {
    return await service.get('/users');
}

export const editUser = async (idUser,data ) => {
    console.log(idUser)
    console.log(data)
    return await service.post(`/users/edit/${idUser}`, data);
}

export const oneUser = async idUser => {
    console.log(idUser)
    return await service.get(`/users/${idUser}`);
}

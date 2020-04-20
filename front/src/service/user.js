import service from './_base';

export const allUser = async () => {
    return await service.get('/users');
}

export const getUser = async (idUser) => {
    return await service.get(`/users/${idUser}`);
}

export const editUser = async data => {
    console.log(data)
    return await service.post("/users/edit", data);
}

export const editPass = async data => {
    return await service.post("/users/update-password", data)
}
import axios from 'axios';

const service = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
});

export const allUser = async () => {
    return await service.get('/users');
}

export const editUser = async (data) => {
    console.log(data)
    return await service.post("/users/edit", data);
}

export const updateAvatar = async (avatarFile) => {
    console.log(avatarFile)
    const data = new FormData();
    data.append("avatar", avatarFile)
    return await service.post("users/image", data)
}

export const editPass = async data => {
    return await service.post("/users/update-password", data)
}

// export const oneUser = async idUser => {
//     console.log(idUser)
//     return await service.get(`/users/${idUser}`);
// }

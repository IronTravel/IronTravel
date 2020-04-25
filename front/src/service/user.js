import service from './_base';

export const allUser = async () => {
    return await service.get('users');
}

export const getUser = async (idUser) => {
    return await service.get(`users/${idUser}`);
}

export const editUser = async data => {
    console.log(data)
    return await service.post("users/edit", data);
}

export const updateAvatar = async (avatarFile) => {
    console.log(avatarFile)
    const data = new FormData();
    data.append("avatar", avatarFile)
    return await service.post("users/image", data)
}

export const updateBackGroundAvatar = async (avatarFile) => {
    console.log(avatarFile)
    const data = new FormData();
    data.append("avatar", avatarFile)
    return await service.post("users/back", data)
}

export const editPass = async data => {
    return await service.post("users/update-password", data)
}

export const matches = async data => {
    return await service.get("users/matches")
}
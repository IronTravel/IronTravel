import service from './_base';

export const allTravel = async () => {
    return await service.get('travels');
}

export const createTravel = async data => {
    console.log(data)
    return await service.post('travels/create', data);
}

export const editTravel = async (data, id) => {
    console.log(id)
    console.log(data)
    return await service.post(`travels/edit/${id}`, data);
}

export const deleteTravel = async idTravel => {
    console.log(idTravel)
    return await service.get(`travels/delete/${idTravel}`);
}

export const getTravel = async idTravel => {
    return await service.get(`travels/${idTravel}`);
}

export const updateImageTravel = async (avatarFile, id) => {
    console.log(avatarFile)
    console.log(id)
    const data = new FormData();
    data.append("avatar", avatarFile)
    return await service.post(`/travels/image/${id}`, data);
}

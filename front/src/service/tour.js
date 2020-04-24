import service from './_base';

export const allTours = async () => {
    return await service.get('/tours');
}

export const createTour = async data => {
    return await service.post('/tours/create', data);
}

export const editTour = async (data, id) => {
    return await service.post(`/tours/edit/${id}`, data);
}

export const deleteTour = async idTours => {
    console.log(idTours)
    return await service.get(`/tours/delete/${idTours}`);
}

export const oneTour = async idTours => {
    console.log(idTours)
    return await service.get(`/tours/${idTours}`);
}

export const updateImageTour = async (avatarFile, id) => {
    console.log(avatarFile)
    console.log(id)
    const data = new FormData();
    data.append("avatar", avatarFile)
    return await service.post(`/tours/image/${id}`, data);
}

import service from './_base';

export const allTours = async () => {
    return await service.get('/tours');
}

export const createTour = async data => {
    return await service.post('/tours/create', data);
}

export const editTours = async idTours => {
    console.log(idTours)
    return await service.post(`/tours/edit/${idTours}`);
}

export const deleteTours = async idTours => {
    console.log(idTours)
    return await service.get(`/tours/delete/${idTours}`);
}

export const oneTour = async idTours => {
    console.log(idTours)
    return await service.get(`/tours/${idTours}`);
}

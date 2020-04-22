import service from './_base';

export const allTravel = async () => {
    return await service.get('/travels');
}

export const createTravel = async data => {
    return await service.post('/travels/create', data);
}

export const editTravel = async idTravel => {
    console.log(idTravel)
    return await service.post(`/travels/create/${idTravel}`);
}

export const deleteTravel = async idTravel => {
    console.log(idTravel)
    return await service.get(`/travels/delete/${idTravel}`);
}

export const getTravel = async idTravel => {
    return await service.get(`/travels/${idTravel}`);
}

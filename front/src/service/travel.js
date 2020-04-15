import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3005/',
    withCredentials: true
});

export const allTravel = async () => {
    return await service.get('/travels');
}

export const createTravel = async () => {
    return await service.post('/travels/create');
}

export const editTravel = async idTravel => {
    console.log(idTravel)
    return await service.post(`/travels/edit/${idTravel}`);
}

export const deleteTravel = async idTravel => {
    console.log(idTravel)
    return await service.get(`/travels/delete/${idTravel}`);
}

export const oneTravel = async idTravel => {
    console.log(idTravel)
    return await service.get(`/travels/${idTravel}`);
}
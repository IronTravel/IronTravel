import axios from 'axios';

const service = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
});

export const allTravel = async () => {
    return await service.get('/travels');
}

export const createTravel = async data => {
    console.log("eeeeeeeeeeeeeeeeeeeeeee",data)
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

export const oneTravel = async idTravel => {
    console.log(idTravel)
    return await service.get(`/travels/${idTravel}`);
}

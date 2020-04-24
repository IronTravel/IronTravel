import service from './_base';


export const oneCity = async (id) => {
    return await service.get(`city/${id}`);
}
import service from './_base';

export const createEntry = async data => {
    return await service.post(`entries/`, data);
}

export const deleteEntry = async entryId => {
    return await service.get(`entries/delete/${entryId}`);
}

export const getUserEntries = async userId => {
    return await service.get(`entries/${userId}`);
}


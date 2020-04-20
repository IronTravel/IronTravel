import service from './_base';

export const createEntry = async () => {
    return await service.post(`/entries/`);
}

export const deleteEntry = async entryId => {
    return await service.post(`/entries/${entryId}`);
}

export const getUserEntries = async userId => {
    return await service.get(`/entries/${userId}`);
}


import service from './_base';

export const getRecentlyPlayer = async (limit) => {
    return await service.get(`spotify/recentlyplayed/${limit}`);
}
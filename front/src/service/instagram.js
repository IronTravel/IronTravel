import service from './_base';

export const getPosts = async () => {
    return await service.get(`/instagram/recentposts/`);
}
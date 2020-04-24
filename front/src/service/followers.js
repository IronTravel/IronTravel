import service from './_base';


//LIST Followers
export const allFollowers = async () => {
    return await service.get('follow/followers')
}

//LIST Following
export const allFollowing = async () => {
    return await service.get('follow/following')
}
//ADD Follow
export const addFollow = async (followID) => {
    console.log(followID)
    return await service.post(`follow/addFollow/${followID}`)
}
//DELETE Follow
export const deleteFollow = async (followID) => {
    console.log(followID)
    return await service.get(`follow/deleteFollow/${followID}`)

}


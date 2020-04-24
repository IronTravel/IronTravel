import service from './_base';


//LIST Followers
export const allFollowers = async () => {
    return await service.get('followers')
}
//ADD Follow
export const addFollow = async (followID) => {
    console.log(followID)
    return await service.post(`followers/addFollow/${followID}`)
}
//DELETE Follow
export const deleteFollow = async (followID) => {
    console.log(followID)
    return await service.get(`followers/deleteFollow/${followID}`)

}


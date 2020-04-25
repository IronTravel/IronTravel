import service from './_base';


export const allCountries = async () => {
    return await service.get('data/countries');
}

//HOBBY//
//All
export const hobbies = async () => {
    return await service.get('data/hobbies');
}

export const randomAboutMe = async () => {
    return await service.get('data/aboutMe/random')
}


export const aboutMe = async () => {
    return await service.get('data/aboutMe/user');
}
//Add
export const addAboutMe = async (data, aboutMe) => {
    return await service.post(`/data/${aboutMe}/add`, data);
}

//Delete
export const deleteAboutMe = async (ID, aboutMe) => {
    return await service.get(`data/${aboutMe}/delete/${ID}`);
}

//MUSICGENRE//
//All
export const musicgenres = async () => {
    return await service.get('data/musicgenres');
}

//PERSONALITY//
//All
export const personalities = async () => {
    return await service.get('data/personalities');
}

//LIFESTYLE//
//All
export const lifestyles = async () => {
    return await service.get('data/lifestyles');
}

//AMENITIES//
//All
export const amenities = async () => {
    return await service.get('data/amenities');
}

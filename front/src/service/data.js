import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3005/',
    withCredentials: true
});

//HOBBY//
//All
export const hobbies = async () => {
    return await service.get('data/hobbies');
}

//Add
export const addHobbies = async idHobbies => {
    console.log(idHobbies)
    return await service.post(`data/hobbies/add/${idHobbies}`);
}

//Delete
export const deleteHobbies= async idHobbies => {
    console.log(idHobbies)
    return await service.get(`data/hobbies/delete/${idHobbies}`);
}

//MUSICGENRE//
//All
export const musicgenres = async () => {
    return await service.get('data/musicgenres');
}

//Add
export const addMusicGenres = async idMusicGenres => {
    console.log(idMusicGenres)
    return await service.post(`data/musicgenres/add/${idMusicGenres}`);
}

//Delete
export const deleteMusicGenres = async idMusicGenres => {
    console.log(idMusicGenres)
    return await service.get(`data/musicgenres/delete/${idMusicGenres}`);
}

//PERSONALITY//
//All
export const personalities = async () => {
    return await service.get('data/personalities');
}

//Add
export const addPersonalities = async idpersonalities => {
    console.log(idpersonalities)
    return await service.post(`data/personalities/add/${idpersonalities}`);
}

//Delete
export const deletePersonalities = async idpersonalities => {
    console.log(idpersonalities)
    return await service.get(`data/personalities/delete/${idpersonalities}`);
}

//LIFESTYLE//
//All
export const lifestyles = async () => {
    return await service.get('data/lifestyles');
}

//Add
export const addLifestyles = async idLifestyles => {
    console.log(idLifestyles)
    return await service.post(`data/lifestyles/add/${idLifestyles}`);
}

//Delete
export const deleteLifestyles = async idLifestyles => {
    console.log(idLifestyles)
    return await service.get(`data/lifestyles/delete/${idLifestyles}`);
}

//AMENITIES//
//All
export const amenities = async () => {
    return await service.get('data/amenities');
}

//Add
export const addAmenities = async idAmenities => {
    console.log(idAmenities)
    return await service.post(`data/amenities/add/${idAmenities}`);
}

//Delete
export const deleteAmenities = async idAmenities => {
    console.log(idAmenities)
    return await service.get(`data/amenities/delete/${idAmenities}`);
}

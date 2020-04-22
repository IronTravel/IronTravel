import service from './_base';


export const allCountries = async () => {
    return await service.get('data/countries');
}

//HOBBY//
//All
export const hobbies = async () => {
    return await service.get('data/hobbies');
}

// export const userHobby = async () => {
//     return await service.get('data/hobbies/user');
// }

// //Add
// export const addHobby = async (idHobbies, h) => {
//     console.log(idHobbies)
//     console.log(h)
//     return await service.post(`data/hobbies/add/${idHobbies}`);
// }

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

// //Add
// export const addMusicGenre = async idMusicGenres => {
//     console.log(idMusicGenres)
//     return await service.post(`data/musicgenres/add/${idMusicGenres}`);
// }

// //Delete
// export const deleteMusicGenre = async idMusicGenres => {
//     console.log(idMusicGenres)
//     return await service.get(`data/musicgenres/delete/${idMusicGenres}`);
// }

//PERSONALITY//
//All
export const personalities = async () => {
    return await service.get('data/personalities');
}

// //Add
// export const addPersonality = async idpersonalities => {
//     console.log(idpersonalities)
//     return await service.post(`data/personalities/add/${idpersonalities}`);
// }

// //Delete
// export const deletePersonality = async idpersonalities => {
//     console.log(idpersonalities)
//     return await service.get(`data/personalities/delete/${idpersonalities}`);
// }

//LIFESTYLE//
//All
export const lifestyles = async () => {
    return await service.get('data/lifestyles');
}

// //Add
// export const addLifestyle = async idLifestyles => {
//     console.log(idLifestyles)
//     return await service.post(`data/lifestyles/add/${idLifestyles}`);
// }

// //Delete
// export const deleteLifestyle = async idLifestyles => {
//     console.log(idLifestyles)
//     return await service.get(`data/lifestyles/delete/${idLifestyles}`);
// }

//AMENITIES//
//All
export const amenities = async () => {
    return await service.get('data/amenities');
}

// //Add
// export const addAmenity = async idAmenities => {
//     console.log(idAmenities)
//     return await service.post(`data/amenities/add/${idAmenities}`);
// }

// //Delete
// export const deleteAmenity = async idAmenities => {
//     console.log(idAmenities)
//     return await service.get(`data/amenities/delete/${idAmenities}`);
// }

// import React, { useState, useEffect } from 'react'

// import { useUser, useUserSetter } from "../context/user";

// import { amenities, hobbies, musicgenres, personalities, lifestyles, addAmenity, deleteAmenity, addHobby, deleteHobby, userHobby } from '../service/data'
// import { whoami } from '../service/auth'

// // if (user) userHobby().then(res => setUserHobbies(res.data))

// export const AmenitiesPage = () => {

//     const user = useUser()
//     console.log(user)
//     const [hobbiesList, setHoobies] = useState([])
//     const [userHobbies, setUserHobbies] = useState([]);

//     const fetchUserHobbies = () => userHobby().then(hobbies => setUserHobbies(hobbies.data));
//     console.log(userHobbies)
    
//     //IMPORTANTE CAMBIAR EN DATA DEL BACK LA INFO QUE NOS TRAEMOS

//     useEffect(() => {
//         whoami().then((res) => {
//             console.log(res.data.my_hobbies)
//             hobbies().then(res => setHoobies(res.data));
//             // setUserHobbies(userHobby().then(res => setUserHobbies(res.data)))
//             fetchUserHobbies()
//             // setUserHobbies(res.data.my_hobbies || [])
//             console.log(userHobbies)
//         });
        
//     }, []);

//     const addHobbies = (hobbieID) => {
//         // addHobby(hobbieID).then(userHobby().then(res => setUserHobbies(res.data)))
//         addHobby(hobbieID).then(fetchUserHobbies())
//     }
//     const deleteHobbies = (hobbieID) => {
//         // deleteHobby(hobbieID).then(userHobby().then(res => setUserHobbies(res.data)))
//         deleteHobby(hobbieID).then(fetchUserHobbies())
//     }

//     return (
//         <>
//             <h1>List of Amenities</h1>
//             <div>
//                 <ul>
//                     {hobbiesList.length &&
//                         hobbiesList.map((e, i) => (
//                             <li key={i}>
//                                 <button onClick={() => addHobbies(e._id)}>ADD</button>
//                                 {e.name}
//                             </li>
//                         ))}
//                 </ul>
//                 <ul>
//                     {userHobbies && userHobbies.map((e, i) => (
//                         <li key={i}>
//                             <button onClick={() => deleteHobbies(e)}>DELETE</button>
//                             {e}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>


//     );
// }




import React, { useState, useEffect } from 'react'

import { useUser } from "../context/user";

import { hobbies, musicgenres, personalities, lifestyles, addAboutMe, deleteAboutMe, aboutMe } from '../service/data'
import { whoami } from '../service/auth'



export const AmenitiesPage = () => {

    const user = useUser()
    console.log(user)
    const [hobbiesList, setHoobies] = useState([])
    const [musicList, setMusicList] = useState([])
    const [personalityList, setPersonalityList] = useState([])
    const [lifeStylesList, setLifeStylesList] = useState([])

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));
    console.log(userAboutMe)
    

    useEffect(() => {
        whoami().then((res) => {
            hobbies().then(res => setHoobies(res.data));
            musicgenres().then(res => setMusicList(res.data));
            personalities().then(res => setPersonalityList(res.data));
            lifestyles().then(res => setLifeStylesList(res.data));
            
            fetchUAboutMe()
        });
        
    }, []);

    const addSingleAboutMe = (ID, aboutMe) => {
        console.log(ID)
        console.log(aboutMe)
        addAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }
    const deleteSingleAboutMe = (ID, aboutMe) => {
        deleteAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }

    return (
        <>
        <h1>List of Amenities</h1>
        <div>
            <div>
            <ul>
                {hobbiesList.length &&
                    hobbiesList.map((e, i) => (
                        <li key={i}>
                            <button onClick={() => addSingleAboutMe(e._id,"hobbies")}>ADD</button>
                            {e.name}
                        </li>
                    ))}
            </ul>
            </div>
            <div>
            <ul>
                {musicList.length &&
                    musicList.map((e, i) => (
                        <li key={i}>
                            <button onClick={() => addSingleAboutMe(e._id,"musicgenres")}>ADD</button>
                            {e.name}
                        </li>
                    ))}
            </ul>
            </div>
            <div>
            <ul>
                {personalityList.length &&
                    personalityList.map((e, i) => (
                        <li key={i}>
                            <button onClick={() => addSingleAboutMe(e._id, "personalities")}>ADD</button>
                            {e.name}
                        </li>
                    ))}
            </ul>
            </div>
            <div>
            <ul>
                {lifeStylesList.length &&
                    lifeStylesList.map((e, i) => (
                        <li key={i}>
                            <button onClick={() => addSingleAboutMe(e._id, "lifestyles")}>ADD</button>
                            {e.name}
                        </li>
                    ))}
            </ul>
            </div>
            <ul>
                {userAboutMe.music && userAboutMe.music.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e,"musicgenres")}>DELETE</button>
                        {e}
                    </li>
                ))}
            </ul>
            <ul>
                {userAboutMe.hobbies && userAboutMe.hobbies.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e,"hobbies")}>DELETE</button>
                        {e}
                    </li>
                ))}
            </ul>
            <ul>
                {userAboutMe.personality && userAboutMe.personality.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e, "personalities")}>DELETE</button>
                        {e}
                    </li>
                ))}
            </ul>
            <ul>
                {userAboutMe.life_style && userAboutMe.life_style.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e, "lifestyles")}>DELETE</button>
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    </>

    )
}
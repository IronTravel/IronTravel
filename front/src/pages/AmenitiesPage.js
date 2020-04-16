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
import { useForm } from 'react-hook-form'

//Context
import { useUser, useUserSetter } from "../context/user";

//Service
import { hobbies, musicgenres, personalities, lifestyles, addAboutMe, deleteAboutMe, aboutMe } from '../service/data'
import { whoami } from '../service/auth'
import { editUser } from '../service/user';

export const AmenitiesPage = () => {

    const user = useUser()
    console.log(user)

    const [hobbiesList, setHoobies] = useState([])
    const [musicList, setMusicList] = useState([])
    const [personalityList, setPersonalityList] = useState([])
    const [lifeStylesList, setLifeStylesList] = useState([])

    const [userAboutMe, setUserAboutMe] = useState([]);

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    const setUser = useUserSetter();

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));
    
    useEffect(() => {
        whoami().then((res) => {
            hobbies().then(res => setHoobies(res.data));
            musicgenres().then(res => setMusicList(res.data));
            personalities().then(res => setPersonalityList(res.data));
            lifestyles().then(res => setLifeStylesList(res.data));
            fetchUAboutMe()
        });
        
    }, []);

        //PREGUNTAR A CARLOS COMO COMPROBAR SI NOS TRAEMOS DATA O NO
    // const onFormSubmit = (data) => {
    //     console.log(user.password)
    //     const userID = user._id
    //     console.log(data.name)
    //     if(data.name === user.name && data.lastName === user.lastName && data.email === user.email) {
    //         setFormSubmitError('you dont change anything');
    //     } else {
    //         editUser(userID, data)
    //         .then((res) => {
    //             setUser(res.data)
    //         })
    //         .catch(e => setFormSubmitError(e.response.data.status))
    //     }
    // }

    const addSingleAboutMe = (ID, aboutMe) => {
        addAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }
    const deleteSingleAboutMe = (ID, aboutMe) => {
        deleteAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }

    const onFormSubmit = (data) => {
        const userID = user._id
                if(data.newPassword === data.confirmNewPassword) {
                    data = {
                        password: data.newPassword
                    }
                    editUser(userID, data)
                    .then((res) => {
                        setUser(res.data)
                    })
                }
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
                        <button onClick={() => deleteSingleAboutMe(e._id,"musicgenres")}>DELETE</button>
                        {e.name}
                    </li>
                ))}
            </ul>
            <ul>
                {userAboutMe.hobbies && userAboutMe.hobbies.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e._id,"hobbies")}>DELETE</button>
                        {e.name}
                    </li>
                ))}
            </ul>
            <ul>
                {userAboutMe.personality && userAboutMe.personality.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e._id, "personalities")}>DELETE</button>
                        {e.name}
                    </li>
                ))}
            </ul>
            <ul>
                {userAboutMe.life_style && userAboutMe.life_style.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e._id, "lifestyles")}>DELETE</button>
                        {e.name}
                    </li>
                ))}
            </ul>
        </div>
        {/* <div>
            <h1>Personal Information</h1>
        {user && 
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
            <label>Name*</label>
            <input placeholder={user.name} name="name" defaultValue={user.name} ref={register({ required: true })}></input>
          </div>
          <div>
            <label>LastName*</label>
            <input placeholder={user.lastName} name="lastName" defaultValue={user.lastName} ref={register({ required: true })}></input>
          </div>
          <div>
            <label>E-mail*</label>
            <input placeholder={user.email} name="email" defaultValue={user.email} ref={register({ required: true })}></input>
          </div>
          {user.dod && 
          <div>
            <label>Birthday</label>
            <input placeholder={user.dod.date} ></input> 
          </div>
            }
        {user.genre && 
          <div>
            <label>Genre</label>
            <input placeholder={user.genre} name="genre" defaultValue={user.genre}></input>
          </div>
        }
          {user.favouriteColor && 
          <div>
            <label>Favourite Color</label>
            <input placeholder={user.favouriteColor} name="favouriteColor" defaultValue={user.favouriteColor} ref={register({ required: true })}></input>
          </div>
            }
            {user.about && 
          <div>
            <label>About You</label>
            <input placeholder={user.about} name="about" defaultValue={user.about} ref={register({ required: true })}></input>
          </div>
            }
            <div className="field-wrapper--button">
                <button className="btn btn--primary btn--w-full" type="submit">Save</button>
            </div>
            <div className="form-errors">{formSubmitError}</div>
        </form>
        }
        </div> */}
            <div>
                <h1>Passwords</h1>
                {user && 
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label>last Password*</label>
                            <input placeholder="••••••••••••" name="lastPassword" type="password"></input>
                        </div>
                        <div>
                            <label>New Password*</label>
                            <input name="newPassword" type="password" ref={register({ required: true })}></input>
                        </div>
                        <div>
                            <label>Confirm New Password*</label>
                            <input name="confirmNewPassword" type="password" ref={register({ required: true })}></input>
                        </div>
                        <div className="field-wrapper--button">
                            <button className="btn btn--primary btn--w-full" type="submit">Save</button>
                        </div>
                        <div className="form-errors">{formSubmitError}</div>
                    </form>
                }
            </div>
    </>
    )
}
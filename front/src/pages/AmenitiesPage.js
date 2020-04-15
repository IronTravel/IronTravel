import React, { useState, useEffect } from 'react'

import { useUser, useUserSetter } from "../context/user";

import { amenities, hobbies, musicgenres, personalities, lifestyles, addAmenity, deleteAmenity, addHobby, deleteHobby, userHobby } from '../service/data'
import { whoami } from '../service/auth'

// if (user) userHobby().then(res => setUserHobbies(res.data))

export const AmenitiesPage = () => {

    const user = useUser()
    console.log(user)
    const [hobbiesList, setHoobies] = useState([])
    const [userHobbies, setUserHobbies] = useState([]);

    const fetchUserHobbies = () => userHobby().then(hobbies => setUserHobbies(hobbies.data));

    useEffect(() => {
        whoami().then((res) => {
            console.log(res.data.my_hobbies)
            hobbies().then(res => setHoobies(res.data));
            // setUserHobbies(userHobby().then(res => setUserHobbies(res.data)))
            fetchUserHobbies()
            // setUserHobbies(res.data.my_hobbies || [])
            console.log(userHobbies)
        });
        
    }, []);

    const addHobbies = (hobbieID) => {
        // addHobby(hobbieID).then(userHobby().then(res => setUserHobbies(res.data)))
        addHobby(hobbieID).then(fetchUserHobbies())
    }
    const deleteHobbies = (hobbieID) => {
        // deleteHobby(hobbieID).then(userHobby().then(res => setUserHobbies(res.data)))
        deleteHobby(hobbieID).then(fetchUserHobbies())
    }

    return (
        <>
            <h1>List of Amenities</h1>
            <div>
                <ul>
                    {hobbiesList.length &&
                        hobbiesList.map((e, i) => (
                            <li key={i}>
                                <button onClick={() => addHobbies(e._id)}>ADD</button>
                                {e.name}
                            </li>
                        ))}
                </ul>
                <ul>
                    {userHobbies && userHobbies.map((e, i) => (
                        <li key={i}>
                            <button onClick={() => deleteHobbies(e)}>DELETE</button>
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
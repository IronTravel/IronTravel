import React, { useState, useEffect } from 'react'

import { useUser, useUserSetter } from "../context/user";

import { amenities, hobbies, musicgenres, personalities, lifestyles, addHobby, deleteHobby } from '../service/data'
import { whoami } from '../service/auth'



const AddHobby = ({ idHobby, added }) => (
    <a
        href="#"
        onClick={async () => {
            await addHobby(idHobby);
            added()
        }}
    >
        ADD
    </a>
)


const DeleteHobby = ({ idHobby, deleted }) => (
    <a
        href="#"
        onClick={async () => {
            await deleteHobby(idHobby);
            deleted()
        }}
    >
        DELETE
    </a>
)

export const AmenitiesPage = () => {
    const [hobbiesList, setHoobies] = useState([])
    const [userHobbies, setUserHoobies] = useState();

    useEffect(() => {
        whoami().then((res) => setUserHoobies(res.data.my_hobbies));
        hobbies().then(res => setHoobies(res.data));
    }, []);

    const handleSetUserHobbies = async (hobbieID) => {
        console.log(hobbieID)
        console.log(userHobbies)
        let newArr = [...userHobbies];
        newArr.push(hobbieID)
        console.log(newArr)
        setUserHoobies(newArr);
        await AddHobby(hobbieID);
    }

    return (
        <>
            <h1>List of Amenities</h1>
            <div>
                <ul>
                    {hobbiesList.length &&
                        hobbiesList.map((e, i) => (
                            <li key={i}>
                                <button onClick={() => handleSetUserHobbies(e._id)}>ADD</button>
                                {/* <AddHobby idHobby={e._id} added={setUserHoobies} /> */}
                                {e.name}
                            </li>
                        ))}
                </ul>
                <ul>
                    {userHobbies && userHobbies.map((e, i) => (
                        <li key={i}>
                            {/* <DeleteHobby idHobby={e} deleted={fetchHobby1} /> */}
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
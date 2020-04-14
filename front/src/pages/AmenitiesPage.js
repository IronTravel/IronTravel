import React, { useState, useEffect } from 'react'

import { useUser, useUserSetter } from "../context/user";

import { amenities, hobbies, musicgenres, personalities, lifestyles, addAmenities, deleteAmenities } from '../service/data'



const AddAmenities = ({ idAmenities, added }) => (
    <a
        href="#"
        onClick={async () => {
            await addAmenities(idAmenities);
            added()
        }}
    >
        ADD
    </a>
)


const DeleteAmenities = ({ idAmenities, deleted }) => (
    <a
        href="#"
        onClick={async () => {
            await deleteAmenities(idAmenities);
            deleted()
        }}
    >
        DELETE
    </a>
)

export const AmenitiesPage = () => {

    const [amenitiesList, setAmenities] = useState([])
    const fetchAmenities = () => amenities().then(res => setAmenities(res.data))
    console.log(amenitiesList)
    const user = useUser();
    console.log("este es el usuario", user)
    const setUser = useUserSetter();
    if (user) console.log(user.about_me.music) //comentar con Carlos


    useEffect(() => {
        fetchAmenities()
        // hobbies()
        //     .then(res => {
        //         setAmenities(res.data)
        //     })
    }, [])

    return (
        <>
            <h1>List of Amenities</h1>
            <div>
                <ul>
                    {amenitiesList.map((e, i) => (
                        <li key={i}>
                            <AddAmenities idAmenities={e._id} added={fetchAmenities} />
                            {e.name}
                        </li>
                    ))}
                </ul>
                {user && user.my_hobbies.map((e, i) => (

                    <li key={i}>
                        <DeleteAmenities idAmenities={e} deleted={fetchAmenities} />
                        {e}
                    </li>

                ))}
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react'

import { amenities } from '../service'

export const AmenitiesPage = () => {

    const [amenitiesList, setAmenities] = useState([])

    useEffect(() => {
        amenities()
            .then(res => {
                setAmenities(res.data)
            })
    }, [])

    return (
        <>
            <h1>Holi</h1>
            {
                amenitiesList && amenitiesList.map((name, i) => <div key={i}>{name}</div>)
            }
        </>
    )
}
import React from 'react'

import { amenities } from '../service'

export const Amenities = async () => {

    const amenitiesList = await amenities();

    return (
        <>
            <h1>Holi</h1>
            {
                amenitiesList && amenitiesList.map(name => <div>{name}</div>)
            }
        </>
    )
}
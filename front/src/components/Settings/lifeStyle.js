import React, { useState, useEffect } from 'react'

//Service
import { lifestyles, addAboutMe, deleteAboutMe, aboutMe } from '../../service/data'
import { whoami } from '../../service/auth'

export const LifeStyle = () => {

    const [lifeStylesList, setLifeStylesList] = useState([])

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));

    useEffect(() => {
        whoami().then((res) => {
            lifestyles().then(res => setLifeStylesList(res.data));
            fetchUAboutMe()
        });
        
    }, []);

    const addSingleAboutMe = (ID, aboutMe) => {
        addAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }

    const deleteSingleAboutMe = (ID, aboutMe) => {
        deleteAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }
    
    return ( 
    <div>
        <div>
            <h1>Life Styles</h1>
        </div>
        <div>
            <h3>Connect with more people according to the way you are. Click on the features that describes you the best. We will match you with other travelers with alike life Styles types, also, this could help other travelers find you as well.</h3>
        </div>
        <div>
            <ul>
                {lifeStylesList.length && lifeStylesList.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => addSingleAboutMe(e._id,"lifestyles")}>ADD</button>
                        {e.name}
                    </li>
                ))}
            </ul>
        </div>
        <div>
           <ul>
                {userAboutMe.life_style && userAboutMe.life_style.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e._id,"lifestyles")}>DELETE</button>
                        {e.name}
                    </li>
                ))}
            </ul>
        </div>
        <div className="field-wrapper--button">
            <button className="btn btn--primary btn--w-full" type="submit">Save</button>
        </div>
    </div>
    )
}

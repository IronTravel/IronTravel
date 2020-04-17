import React, { useState, useEffect } from 'react'

//Service
import { personalities, addAboutMe, deleteAboutMe, aboutMe } from '../../service/data'
import { whoami } from '../../service/auth'

export const Personality = () => {

    const [personalityList, setPersonalityList] = useState([])

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));

    useEffect(() => {
        whoami().then((res) => {
            personalities().then(res => setPersonalityList(res.data));
            fetchUAboutMe()
        });
        
    }, []);

    const addSingleAboutMe = (ID, aboutMe) => {
        addAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }
    const deleteSingleAboutMe = (ID, aboutMe) => {
        deleteAboutMe(ID, aboutMe).then(fetchUAboutMe())
    }

    return(
        <div>
        <div>
            <h1>Personality</h1>
        </div>
        <div>
            <h3>Connect with more people according to the way you are. Click on the features that describes you the best. We will match you with other travelers with life Personalities, also, this could help other travelers find you as well.</h3>
        </div>
        <div>
            <ul>
                {personalityList.length && personalityList.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => addSingleAboutMe(e._id,"personalities")}>ADD</button>
                        {e.name}
                    </li>
                ))}
            </ul>
        </div>
        <div>
           <ul>
                {userAboutMe.personality && userAboutMe.personality.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e._id,"personalities")}>DELETE</button>
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

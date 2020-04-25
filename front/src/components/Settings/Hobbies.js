import React, { useState, useEffect } from 'react'

//Service
import { hobbies, addAboutMe, deleteAboutMe, aboutMe } from '../../service/data'
import { whoami } from '../../service/auth'

export const Hobbies = () => {
    
    const [hobbiesList, setHoobies] = useState([])

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));

    useEffect(() => {
        whoami().then((res) => {
            hobbies().then(res => setHoobies(res.data));
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
            <h1>Hobbies</h1>
        </div>
        <div>
            <h3>Connect with more people according to the way you are. Click on the features that describes you the best. We will match you with other travelers with alike hobbies types, also, this could help other travelers find you as well.</h3>
        </div>
        <div>
            <ul>
                {hobbiesList.length && hobbiesList.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => addSingleAboutMe(e._id,"hobbies")}>ADD</button>
                        {e.name}
                    </li>
                ))}
            </ul>
        </div>
        <div>
           <ul>
                {userAboutMe.hobbies && userAboutMe.hobbies.map((e, i) => (
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e._id,"hobbies")}>DELETE</button>
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



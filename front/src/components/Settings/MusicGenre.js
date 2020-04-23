import React, { useState, useEffect } from 'react'

//Service
import { musicgenres, addAboutMe, deleteAboutMe, aboutMe } from '../../service/data'
import { whoami } from '../../service/auth'

export const Music = () => {
    
    const [musicList, setMusicList] = useState([])

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));

    useEffect(() => {
        whoami().then((res) => {
            musicgenres().then(res => setMusicList(res.data));
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
            <h1>Music Genres</h1>
        </div>
        <div>
            <h3>Connect with more people according to the way you are. Click on the features that describes you the best. We will match you with other travelers with alike Music, also, this could help other travelers find you as well.</h3>
        </div>
        <div>
        {musicList.length && musicList.map((e, i) => (
            <ul style="listStyle:none">
                    <li key={i}>
                        <button onClick={() => addSingleAboutMe(e._id,"musicgenres")}>ADD</button>
                        {e.name}
                    </li>
            </ul>
            ))}
        </div>
        <div>
        {userAboutMe.music && userAboutMe.music.map((e, i) => (
           <ul  style="listStyle:none">
                    <li key={i}>
                        <button onClick={() => deleteSingleAboutMe(e._id,"musicgenres")}>DELETE</button>
                        {e.name}
                    </li>
            </ul>
))}
        </div>
        <div className="field-wrapper--button">
            <button className="btn btn--primary btn--w-full" type="submit">Save</button>
        </div>
    </div>
    )
}



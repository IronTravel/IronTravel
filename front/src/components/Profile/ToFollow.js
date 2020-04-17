import React, { useState, useEffect } from 'react'

//Service
import { aboutMe } from '../../service/data'
import { whoami } from '../../service/auth'

export const ToFollow = () => {

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));

    useEffect(() => {
        whoami().then((res) => {
            fetchUAboutMe()
        });
        
    }, []);

    return (
        <div>
            <div>
                <h1>Profile resume</h1>
            </div>
            <div>
                <h2>About Me</h2>
                {userAboutMe.about && 
                <p>{userAboutMe.about}</p>
                }
            </div>
            <div>
                <h2>Personality</h2>
                <ul>
                    {userAboutMe.personality && userAboutMe.personality.map((e, i) => (
                        <li key={i}>
                            {e.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Life Style</h2>
                <ul>
                    {userAboutMe.life_style && userAboutMe.life_style.map((e, i) => (
                        <li key={i}>
                            {e.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Hobbies</h2>
                <ul>
                    {userAboutMe.hobbies && userAboutMe.hobbies.map((e, i) => (
                        <li key={i}>
                            {e.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'

import { useUser } from "../../context/user";

import { randomAboutMe } from '../../service/data'

export const UserProfileHeader = () => {
    const user = useUser()

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => randomAboutMe().then(aboutMe => setUserAboutMe(aboutMe.data.join(' 🌍 ').toString()));

    useEffect(() => {
        fetchUAboutMe()
    }, []);


    return (
        <div className="profile-header">
            <div className="profile-header__bg">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
            </div>
            <div className="profile-header__info">
                <div className="profile-header__info__data">
                    <div className="value">73</div>
                    <div className="key">Travels</div>
                </div>
                <div className="profile-header__info__data">
                    <div className="value">289</div>
                    <div className="key">Tours</div>
                </div>
                <div className="profile-header__info__data profile-header__info__data--user">
                    {user && 
                    <div className="big-avatar">
                        <img src={user.avatar} alt="" />
                    </div>
                    }
                    {user && 
                    <div className="value">{user.name} {user.lastName} </div>
                    }
                    {userAboutMe && 
                    <div className="key">{userAboutMe}</div>
                    }
                </div>
                <div className="profile-header__info__data">
                    <div className="value">34K</div>
                    <div className="key">Followers</div>
                </div>
                <div className="profile-header__info__data">
                    <div className="value">789</div>
                    <div className="key">Following</div>
                </div>
            </div>
        </div>
    )
}
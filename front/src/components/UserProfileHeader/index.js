import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import defaultAvatar from '../../assets/images/avatar.png';

// Context
import { useUser } from "../../context/user";

export const UserProfileHeader = ({ data }) => {

    const loggedInUser = useUser();
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(data || loggedInUser)
    }, []);

    const handleGetRandom = (arr) => arr[_.random(0, arr.length - 1)]?.name || '';

    return (
        <div className="profile-header">
            <div className="profile-header__bg">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
            </div>
            <div className="profile-header__info">
                <div className="profile-header__info__data">
                    <div className="value">{user?.travels?.length || 0}</div>
                    <div className="key">Travels</div>
                </div>
                <div className="profile-header__info__data">
                    <div className="value">{user?.tours?.length || 0}</div>
                    <div className="key">Tours</div>
                </div>
                <div className="profile-header__info__data profile-header__info__data--user">
                    {
                        user &&
                        <div className="big-avatar">
                            <img src={user?.avatar || defaultAvatar} alt="" />
                        </div>
                    }

                    <div className="value">{user?.fullName}</div>
                    {
                        <div className="key">
                            {user.personality && handleGetRandom(user.personality)} 🌎 {user.life_style && handleGetRandom(user.life_style)} 🌎 {user.hobbies && handleGetRandom(user.hobbies)}
                        </div>
                    }
                </div>
                <div className="profile-header__info__data">
                    <div className="value">{user?.followers?.length || 0}</div>
                    <div className="key">Followers</div>
                </div>
                <div className="profile-header__info__data">
                    <div className="value">{user?.following?.length || 0}</div>
                    <div className="key">Following</div>
                </div>
            </div>
        </div >
    )
}
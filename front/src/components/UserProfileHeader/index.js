import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

import { useUser, useUserSetter } from "../../context/user";

import { randomAboutMe } from '../../service/data'
import { updateAvatar } from '../../service/user';

const cloudinary = require("cloudinary-core");

//Nombre del cloudinary que sale en la web
const cl = cloudinary.Cloudinary.new({ cloud_name: "dbfbhlyxp" });

export const UserProfileHeader = () => {
    const user = useUser()
    const setUser = useUserSetter()

    const user = useUser();

    const [userAboutMe, setUserAboutMe] = useState([]);
    const fetchUAboutMe = () => randomAboutMe().then(aboutMe => setUserAboutMe(aboutMe.data.join(' 🌍 ').toString()));

    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        fetchUAboutMe()
    }, []);

    const onSubmit = data => {
        const myAvatar = data.avatar[0];
        console.log(myAvatar)
        updateAvatar(myAvatar)
        .then((res) => {
            console.log("changed file")
            setUser(res.data.user)
        })
        .catch((error) => {
            console.log("error updating")
            console.log(error)
        })
    }   

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

                    <div className="big-avatar">
                        <img src={user && user.avatar || defaultAvatar} alt="" />
                    </div>

                    {user &&
                        <div className="value">{user.name} {user.lastName}</div>
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
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input name="avatar" type="file" ref={register()} />
                    </div>
                    <button type="submit">Change Profile Pic</button>
                </form>
            </div>
        </div>
    )
}


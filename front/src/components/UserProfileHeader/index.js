import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { useForm } from "react-hook-form";

// Context
import { useUser, useUserSetter } from "../../context/user";
import defaultAvatar from '../../assets/images/avatar.png';
import { randomAboutMe } from '../../service/data'
import { updateAvatar } from '../../service/user';
import { whoami } from '../../service/auth';

const cloudinary = require("cloudinary-core");


//Nombre del cloudinary que sale en la web
const cl = cloudinary.Cloudinary.new({ cloud_name: "dbfbhlyxp" });

export const UserProfileHeader = ({ data }) => {

    const user = useUser()

    const setUser = useUserSetter();

    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        whoami().then((res) => {
            setUser(res.data)
        });
    }, []);

    const handleGetRandom = (arr) => arr[_.random(0, arr.length - 1)]?.name || '';

    console.log(user.personality)
    console.log(user)

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
        <>
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
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input name="avatar" type="file" ref={register()} />
                    </div>
                    <button type="submit">Change Profile Pic</button>
                </form>
            </div>
        </>
    )
}


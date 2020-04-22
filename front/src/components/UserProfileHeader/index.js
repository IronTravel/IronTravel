import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import _ from 'lodash';

// Context
import { useUser, useUserSetter } from "../../context/user";
import defaultAvatar from '../../assets/images/avatar.png';
import { randomAboutMe } from '../../service/data'
import { updateAvatar } from '../../service/user';
import { Save } from 'react-feather';

const cloudinary = require("cloudinary-core");

//Nombre del cloudinary que sale en la web
const cl = cloudinary.Cloudinary.new({ cloud_name: "dbfbhlyxp" });

export const UserProfileHeader = ({ data }) => {

    const location = useLocation();
    const { id } = useParams();

    const loggedInUser = useUser();
    const [user, setUser] = useState({});
    const [hasImageLoaded, setHasImageLoaded] = useState(false);
    const [inUserSettigns, setIUserSettigns] = useState(false);

    const { handleSubmit, register, errors, reset } = useForm();

    useEffect(() => {
        setUser(id ? data : loggedInUser)
        setIUserSettigns(location.pathname.includes('settings'))
    }, [id]);

    const handleGetRandom = (arr) => arr[_.random(0, arr.length - 1)]?.name || '';
    const handleChange = (e) => setHasImageLoaded(!!e.target.files.length)

    const onSubmit = (data, e) => {
        const myAvatar = data.avatar[0];

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
                        <form className="big-avatar-wrapper" onSubmit={handleSubmit(onSubmit)}>
                            {
                                user &&
                                <>
                                    <label className={`${inUserSettigns && 'clickable'}`}>
                                        <div className="big-avatar">
                                            <img src={user?.avatar || defaultAvatar} alt="" />
                                        </div>
                                        {
                                            inUserSettigns &&
                                            <input className="big-avatar__upload-btn" type="file"
                                                name="avatar"
                                                accept="image/png, image/jpeg"
                                                onChange={(e) => handleChange(e)}
                                                ref={register()} />
                                        }
                                    </label>
                                    {
                                        hasImageLoaded &&
                                        <button className="big-avatar__save" type="submit">
                                            <Save size={20} />
                                        </button>
                                    }
                                </>
                            }
                        </form>

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
        </>
    )
}


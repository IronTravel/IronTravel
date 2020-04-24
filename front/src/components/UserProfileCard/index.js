import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import defaultAvatar from '../../assets/images/avatar.png';
import StarIcon from '../../assets/svgs/icon-star.svg';
import LikeIcon from '../../assets/svgs/icon-like.svg';
import ProfileIcon from '../../assets/svgs/icon-profile.svg';
import { deleteFollow, addFollow } from '../../service/followers';

export const UserProfileCard = ({ user, followers, setFollowers }) => {

    const handleGetRandom = (arr) => arr[_.random(0, arr.length - 1)]?.name || '';

    const check = (id) => {
        const followersID = followers.followers.map(e => e._id)
        return followersID.includes(id)
    }

    return (
        <article className="entity-card">
            <header className="entity-card__header">
                <Link to={`/profile/${user._id}`}>
                    <div className="entity-card__header__bg">
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                    </div>
                </Link>
            </header>
            <div className="entity-card__body">
                <div className="entity-card__body__avatar-wrapper">
                    <div className="entity-card__body__avatar">
                        <Link to={`/profile/${user._id}`}>
                            <img src={user.avatar || defaultAvatar} alt={user.fullName} />
                        </Link>
                    </div>
                    <span className="entity-card__body__user-value">{user.factorTotal}</span>
                </div>
                <h2 className="entity-card__body__title">{user.fullName}</h2>
                <p className="entity-card__body__tagline">
                    {handleGetRandom(user.personality)} 🌍 {handleGetRandom(user.life_style)} 🌍 {handleGetRandom(user.hobbies)}
                </p>
                <div className="entity-card__body__data">
                    <div className="entity-card__data">
                        <div className="value">{user.my_travels.length}</div>
                        <div className="key">Travels</div>
                    </div>
                    {/* <div className="entity-card__data">
                        <div className="key">
                            <StarIcon />
                        </div>
                        <div className="value">73</div>
                    </div> */}
                    <div className="entity-card__data">
                        <div className="value">{user.my_travels.length}</div>
                        <div className="key">Tours</div>
                    </div>
                </div>
            </div>
            <footer className="entity-card__footer">
                {
                    user && followers && check(user._id) ?
                    <button className="entity-card__footer__btn" onClick={()=>deleteFollow(user._id).then((res)=> setFollowers(res.data)) }>
                        <ProfileIcon />
                        <span>Disconnect</span>
                    </button> :
                    <button className="entity-card__footer__btn" onClick={()=>addFollow(user._id).then((res)=> setFollowers(res.data)) }>
                        <LikeIcon />
                        <span>Connect</span>
                    </button>
                }
                <Link className="entity-card__footer__btn" to={`/profile/${user._id}`}>
                    <ProfileIcon />
                    <span>Profile</span>
                </Link>
            </footer>
        </article>
    )
}
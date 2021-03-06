import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import defaultAvatar from '../../assets/images/avatar.png';
import StarIcon from '../../assets/svgs/icon-star.svg';
import ProfileIcon from '../../assets/svgs/icon-profile.svg';

import { ThumbsDown, ThumbsUp } from 'react-feather';
import { deleteFollow, addFollow } from '../../service/followers';
import Modali, { useModali } from 'modali';

export const UserProfileCard = ({ user, following, setFollowing }) => {

    const [deleteOneFollow, setDeleteOneFollow] = useModali({ title: 'Unfollow' });

    const handleGetRandom = (arr) => arr[_.random(0, arr.length - 1)]?.name || '';

    const check = (id) => {
        const followingID = following.following.map(e => e._id)
        return followingID.includes(id)
    }

    return (
    <>
        <article className="entity-card">
            <header className="entity-card__header">
                <Link to={`/profile/${user._id}`}>
                    <div className="entity-card__header__bg">
                        <img src={user.main_image[0]} alt="" />
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
                    { !!user.factorTotal && <span className="entity-card__body__user-value">{user.factorTotal}</span> }
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
                    user && following && check(user._id) ?
                    <button className="entity-card__footer__btn" onClick={()=>setDeleteOneFollow() }>
                        <ThumbsDown size={18} />
                        <span>Unfollow</span>
                    </button> :
                    <button className="entity-card__footer__btn" onClick={()=>addFollow(user._id).then((res)=> setFollowing(res.data)) }>
                        <ThumbsUp size={18} />
                        <span>Follow</span>
                    </button>
                }
                <Link className="entity-card__footer__btn" to={`/profile/${user._id}`}>
                    <ProfileIcon />
                    <span>Profile</span>
                </Link>
            </footer>
        </article>

        {/* Delete Modal */}
        <Modali.Modal {...deleteOneFollow} className="modal">
            {user && following &&
            <div className="auth-card__body">
                <p className="mb-3"><strong> You are about to unfollow a someone. You will lose contact, are you sure you want to continue?</strong></p>
                <div>
                <Modali.Button label="Unfollow"
                    isStyleDestructive onClick={() => {
                        deleteFollow(user._id).then((res)=> setFollowing(res.data))
                        setDeleteOneFollow()
                    }}/>
                </div>
            </div>
            }
        </Modali.Modal>
    </>
    )
}
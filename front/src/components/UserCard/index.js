import React from 'react';
import defaultAvatar from '../../assets/images/avatar.png';

export const UserCard = ({ avatar, avatarSize = 25, name, time }) => {
    return (
        <div className="user-card">
            <div className="user-card__img">
                <img src={avatar || defaultAvatar} width={avatarSize} alt="" />
            </div>
            <div className="user-card__info">
                <div className="user-card__name">{name}</div>
                {time && <div className="user-card__time">{time}</div>}
            </div>
        </div>
    )
}
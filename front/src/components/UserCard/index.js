import React from 'react';
import defaultAvatar from '../../assets/images/avatar.png';

export const UserCard = ({ avatar, name, time, avatarSize = 25 }) => {
    return (
        <div className="user-card">
            <div className="user-card__img" style={{ width: avatarSize, height: avatarSize }}>
                <img
                    src={avatar || defaultAvatar}
                    width={avatarSize * 1.2}
                    alt="" />
            </div>
            <div className="user-card__info">
                <div className="user-card__name">{name}</div>
                {time && <div className="user-card__time">{time}</div>}
            </div>
        </div>
    )
}
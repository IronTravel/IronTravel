import React from 'react';
import { Heart } from 'react-feather'

import { useUser } from '../../context/user';

export const LikeButton = ({ entry, count, inverted, ...props }) => {

    const loggedInUser = useUser();

    return (
        <div {...props}>
            <div className={`btn-like ${inverted ? 'btn-like--inverted' : ''}`}>
                {
                    <button className={`btn-like__icon ${entry?.likes.filter(e => e._id === loggedInUser._id).length && 'btn-like__icon--liked'}`}>
                        <Heart />
                    </button>
                }
                <span className="btn-like__count">{count || 0}</span>
            </div>
        </div>
    )
}
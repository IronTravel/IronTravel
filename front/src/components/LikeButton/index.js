import React from 'react';
import IconHeart from '../../assets/svgs/icon-heart.svg';

export const LikeButton = ({ count, inverted, ...props }) => {
    return (
        <div {...props}>
            <div className={`btn-like ${inverted ? 'btn-like--inverted' : ''}`}>
                <button className="btn-like__icon">
                    <IconHeart />
                </button>
                <span className="btn-like__count">{count || 0}</span>
            </div>
        </div>
    )
}
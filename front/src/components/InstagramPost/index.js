import React from 'react';
import moment from 'moment';
import { LikeButton } from '../LikeButton';

import TravelIconInstagram from '../../assets/svgs/icon-instagram.svg';

export const InstagramPost = ({ data }) => {
    return (
        <article className="row travel-timeline__post travel-timeline__post--instagram">
            <header className="col-4 travel-timeline__post__header">
                <time className="date">{moment(data.posted_at).format('MMMM Do, YYYY [@] HH:mm')}</time>
                <div className="action">Listened to</div>

                <LikeButton count={data.likes?.length} inverted />
                {
                    data.likes &&
                    <LikesFaces inverted entries={data.likes} />
                }

                <div className="post-action">
                    <TravelIconInstagram />
                </div>
            </header>
            <div className="col-8 travel-timeline__post__body">
                <article className="instagram-post">
                    <figure className="instagram-post__img">
                        <img src={data.image} alt="" />
                    </figure>
                    <div className="instagram-post__content">
                        <p>{data.caption}</p>
                    </div>
                </article>
            </div>
        </article>
    )
}
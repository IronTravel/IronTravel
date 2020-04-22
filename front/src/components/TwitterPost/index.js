import React from 'react';

import TravelIconTwitter from '../../assets/svgs/icon-twitter.svg';
import iconQuotes from '../../assets/images/icon-quotes.png';

export const TwitterPost = () => {

    return (
        <article className="row travel-timeline__post travel-timeline__post--twitter">
            <header className="col-4 travel-timeline__post__header">
                <time className="date">August 7, 2020 @ 1:30pm</time>
                <div className="action">Listened to</div>

                <LikeButton count={data.likes?.length} inverted />
                {
                    data.likes &&
                    <LikesFaces inverted entries={data.likes} />
                }

                <div className="post-action">
                    <TravelIconTwitter />
                </div>
            </header>
            <div className="col-8 travel-timeline__post__body">
                <article className="twitter-post">
                    <div className="twitter-post__content">
                        <img className="twitter-post__quotes" src={iconQuotes} alt="" />
                        <p>Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.</p>
                    </div>
                </article>
            </div>
        </article>
    )
}
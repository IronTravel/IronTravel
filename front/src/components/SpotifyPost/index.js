import React, { useState, useEffect } from 'react';
import moment from 'moment';

import TravelIconMusic from '../../assets/svgs/icon-music.svg';
import { PlayCircle, StopCircle } from 'react-feather';
import { LikeButton } from '../LikeButton';
import { LikesFaces } from '../LikesFaces';

export const SpotifyPost = ({ data }) => {

    const [audio, setAudio] = useState('');

    const formatTime = (time) => {
        const date = new Date();
        date.setTime(time);
        return `${date.getMinutes()}:${(date.getSeconds()).toString().padStart(2, '0')}`;
    }

    return (
        <article className="row travel-timeline__post travel-timeline__post--music">
            <header className="col-4 travel-timeline__post__header">
                <time className="date">{moment(data.played_at).format('MMMM Do, YYYY [@] HH:mm')}</time>
                <div className="action">Listened to</div>

                <LikeButton count={data.likes?.length} inverted />
                {
                    data.likes &&
                    <LikesFaces inverted entries={data.likes} />
                }

                <div className="post-action">
                    <TravelIconMusic />
                </div>
            </header>
            <div className="col-8 travel-timeline__post__body">
                <article className="music-post">
                    <figure className="music-post__img">
                        <img src={data.image} alt="" />
                    </figure>
                    <div className="music-post__content">
                        <h3 className="music-post__title">{data.artists}</h3>
                        <p className="music-post__artist">{data.song}</p>
                        <dl className="music-post__data">
                            {
                                data?.duration_ms &&
                                <>
                                    <dt>Duration: </dt>
                                    <dd>{formatTime(data.duration_ms)}</dd>
                                </>
                            }
                            {
                                data?.release_date &&
                                <>
                                    <dt>Year: </dt>
                                    <dd>{moment(data.release_date).format('YYYY')}</dd>
                                </>
                            }
                        </dl>
                        {
                            audio !== data.preview_url ?
                                <PlayCircle size={30} className="music-post__audio-control" onClick={() => setAudio(data.preview_url)} /> :
                                <StopCircle size={30} className="music-post__audio-control" onClick={() => setAudio('')} />
                        }
                    </div>
                </article>
            </div>
        </article>
    )
}
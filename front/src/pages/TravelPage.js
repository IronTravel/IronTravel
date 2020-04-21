import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';

// Service
import { getRecentlyPlayer } from '../service/spotify';
import { getPosts } from '../service/instagram';

// Components
import { Header } from '../layout/Header';
import { UserCard } from '../components/UserCard';
import { LikeButton } from '../components/LikeButton';
import { AudioPlayer } from '../components/AudioPlayer';

import TravelIconMusic from '../assets/svgs/icon-music.svg';
import TravelIconTwitter from '../assets/svgs/icon-twitter.svg';
import TravelIconInstagram from '../assets/svgs/icon-instagram.svg';

import iconInstagram from '../assets/images/icon-instagram.png';
import iconSpotify from '../assets/images/icon-spotify.png';
import iconQuotes from '../assets/images/icon-quotes.png';

export const TravelPage = () => {

    const [entries, getEntries] = useState([]);
    const [entriesIg, getEntriesIg] = useState([]);
    const [audio, setAudio] = useState('');

    const handleLinkNetwork = (network) => {
        switch (network) {
            case 'instagram':
                console.log('Handle Instagram Here')
                break;

            case 'spotify':
                console.log('Handle Spotify Here')
                break;
        }
    }

    const formatTime = (time) => {
        const date = new Date();
        date.setTime(time);
        return `${date.getMinutes()} : ${(date.getSeconds()).toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        getRecentlyPlayer(10).then(res => getEntries(res.data));
        getPosts().then(res => { getEntriesIg(res.data) });
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className="travel-header">
                    <div className="travel-header__bg">
                        <div className="travel-header__info">
                            <h2 className="travel-header__title">Discovering my roots in Japan</h2>
                            <p className="travel-header__tagline">Tourism | Japan</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                    </div>
                </div>

                <div className="travel-timeline">
                    <div className="travel-link">
                        <span className="font-italic">Travel linked with:</span>
                        <button className="link-network">
                            <a href={`${process.env.API_URL}instagram/`}>
                                <img src={iconInstagram} alt="icon instagram" />
                            </a>
                            {/* <img onClick={() => handleLinkNetwork('instagram')} src={iconInstagram} alt="icon instagram" /> */}
                        </button>
                        <button className="link-network">
                            <a href={`${process.env.API_URL}spotify/`}>
                                <img src={iconSpotify} alt="icon spotify" />
                            </a>
                            {/* <img onClick={() => handleLinkNetwork('spotify')} src={iconSpotify} alt="icon spotify" /> */}
                        </button>
                    </div>

                    <AudioPlayer audio={audio} />

                    {
                        entries?.map((entry, i) => (
                            <article key={i} className="row travel-timeline__post travel-timeline__post--music">
                                <header className="col-4 travel-timeline__post__header">
                                    <time className="date">{moment(entry.played_at).format('MMMM Do, YYYY [@] HH:mm')}</time>
                                    <div className="action">Listened to</div>

                                    <LikeButton count={entry.likes?.length} inverted />
                                    {
                                        entry.likes &&
                                        <LikesFaces inverted entries={entry.likes} />
                                    }

                                    <div className="post-action">
                                        <TravelIconMusic />
                                    </div>
                                </header>
                                <div className="col-8 travel-timeline__post__body">
                                    <article className="music-post">
                                        <figure className="music-post__img">
                                            <img src={entry.image} alt="" />
                                        </figure>
                                        <div className="music-post__content">
                                            <h3 className="music-post__title">{entry.artists}</h3>
                                            <p className="music-post__artist">{entry.song}</p>
                                            <dl className="music-post__data">
                                                {
                                                    entry?.duration_ms &&
                                                    <>
                                                        <dt>Duration: </dt>
                                                        <dd>{formatTime(entry.duration_ms)}</dd>
                                                    </>
                                                }
                                                {
                                                    entry?.year &&
                                                    <>
                                                        <dt>Year: </dt>
                                                        <dd>2018</dd>
                                                    </>
                                                }
                                            </dl>
                                            <button onClick={() => setAudio(entry.preview_url)}>Play</button>
                                            {/* <button onClick={() => playIt(entry.preview_url)}>Play</button> */}
                                        </div>
                                    </article>
                                </div>
                            </article>
                        ))
                    }

                    {
                        entriesIg?.map((entry, i) => (
                            <article key={i} className="row travel-timeline__post travel-timeline__post--instagram">
                                <header className="col-4 travel-timeline__post__header">
                                    <time className="date">{moment(entry.posted_at).format('MMMM Do, YYYY [@] HH:mm')}</time>
                                    <div className="action">Listened to</div>

                                    <LikeButton count={entry.likes?.length} inverted />
                                    {
                                        entry.likes &&
                                        <LikesFaces inverted entries={entry.likes} />
                                    }

                                    <div className="post-action">
                                        <TravelIconInstagram />
                                    </div>
                                </header>
                                <div className="col-8 travel-timeline__post__body">
                                    <article className="instagram-post">
                                        <figure className="instagram-post__img">
                                            <img src={entry.image} alt="" />
                                        </figure>
                                        <div className="instagram-post__content">
                                            <p>{entry.caption}</p>
                                        </div>
                                    </article>
                                </div>
                            </article>
                        ))
                    }

                    {/* <article className="row travel-timeline__post travel-timeline__post--twitter">
                        <header className="col-4 travel-timeline__post__header">
                            <time className="date">August 7, 2020 @ 1:30pm</time>
                            <div className="action">Listened to</div>
                            <LikeButton inverted />
                            <div className="inline-objects inline-objects--inverted">
                                <div className="inline-objects__images">
                                    <UserCard showBorder avatarSize={28} />
                                    <UserCard showBorder avatarSize={28} />
                                    <UserCard showBorder avatarSize={28} />
                                    <UserCard showBorder avatarSize={28} />
                                    <UserCard showBorder avatarSize={28} />
                                </div>
                                <div className="inline-objects__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
                            </div>
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
                */}
                </div>
            </div>

        </>
    )
}
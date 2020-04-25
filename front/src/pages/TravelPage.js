import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Context
import { useUser } from '../context/user';

// Service
import { getTravel } from '../service/travel';
// import { getRecentlyPlayer } from '../service/spotify';
// import { getPosts } from '../service/instagram';

// Components
import { Header } from '../layout/Header';
import { AudioPlayer } from '../components/AudioPlayer';

import iconInstagram from '../assets/images/icon-instagram.png';
import iconSpotify from '../assets/images/icon-spotify.png';

import { InstagramPost } from '../components/InstagramPost';
import { SpotifyPost } from '../components/SpotifyPost';
import { withProtected } from '../components/withProtectedHOC';

const Page = () => {

    const user = useUser();
    const { travel_id } = useParams();
    const [travel, setTravel] = useState();
    const [audio, setAudio] = useState('');

    const isOwner = () => user.my_travels.includes(travel_id)

    useEffect(() => {
        getTravel(travel_id).
            then(res => setTravel(res.data))
        // getRecentlyPlayer(10)
        //     .then(res => setEntries(res.data));
        // getPosts()
        //     .then(res => { setEntriesIg(res.data) });
    }, [])

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

    return (
        <>
            <Header />
            <div className="container">
                <div className="travel-header">
                    <div className="travel-header__bg">
                        <div className="travel-header__info">
                            <h2 className="travel-header__title">{travel?.name}</h2>
                            <p className="travel-header__tagline">Tourism | {travel?.country.name}</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                    </div>
                </div>

                <div className={`travel-timeline ${travel?.entries.length && 'travel-timeline--with-entries'}`}>
                    {
                        isOwner &&
                        <>
                            {
                                !travel?.entries.length &&
                                <div className="travel-link-empty">
                                    <div className="travel-link-empty__icons">
                                        {
                                            travel_id &&
                                            <>
                                                <a href={`${process.env.API_URL}instagram/?travel_id=${travel_id}`}>
                                                    <img src={iconInstagram} alt="icon instagram" />
                                                </a>
                                                <a href={`${process.env.API_URL}spotify/?travel_id=${travel_id}`}>
                                                    <img src={iconSpotify} alt="icon spotify" />
                                                </a>
                                            </>
                                        }
                                    </div>
                                    <p>Link your travel with your Social Networks</p>
                                </div>
                            }

                            {
                                travel?.entries.length &&
                                <div className="travel-link-summary">
                                    <span className="font-italic">Travel linked with:</span>
                                    <span className="link-network">
                                        {
                                            user?.instagram?.user_id ?
                                                <img onClick={() => handleLinkNetwork('instagram')} src={iconInstagram} alt="icon instagram" /> :

                                                travel_id && <a href={`${process.env.API_URL}instagram/?travel_id=${travel_id}`}>
                                                    <img src={iconInstagram} alt="icon instagram" />
                                                </a>
                                        }
                                    </span>
                                    <span className="link-network">
                                        {
                                            user?.spotify?.user_id ?
                                                <img onClick={() => handleLinkNetwork('spotify')} src={iconSpotify} alt="icon spotify" /> :

                                                travel_id && <a href={`${process.env.API_URL}spotify/?travel_id=${travel_id}`}>
                                                    <img src={iconSpotify} alt="icon spotify" />
                                                </a>
                                        }
                                    </span>
                                </div>
                            }
                        </>
                    }

                    <AudioPlayer audio={audio} />

                    {
                        travel?.entries.map((entry, i) => {
                            if (entry.type === 'instagram')
                                return <InstagramPost key={i} data={entry.content} />
                            if (entry.type === 'spotify')
                                return <SpotifyPost key={i} data={entry.content} audio={audio} setAudio={(audio) => setAudio(audio)} />
                            if (entry.type === 'twitter')
                                return <TwitterPost key={i} data={entry.content} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export const TravelPage = withProtected(Page);
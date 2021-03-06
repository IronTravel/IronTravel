import React, { useState, useEffect } from 'react';
import { useParams, Link  } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';

// Context
import { useUser } from '../context/user';

// Service
import { getUser } from '../service/user'
import { getUserEntries } from '../service/entries';
import { whoami } from '../service/auth';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { PublishBox } from '../components/PublishBox';
import { Entry } from '../components/Entry';
import { withProtected } from '../components/withProtectedHOC';

const Page = () => {
    const loggedInUser = useUser();
    const [user, setUser] = useState();
    const [entries, setEntries] = useState();
    const { id } = useParams();

    const handleSetEntry = (entries) => {
        setEntries(_.orderBy(entries, ['_id'], ['desc']));
    }

    useEffect(() => {
        if (id) {
            getUser(id).then(res => {
                setUser(res.data);
                getUserEntries(id).then(res => handleSetEntry(res.data));
            });
        } else {
            setUser(loggedInUser);
            // whoami().then((res) => {
            //     setUser(res.data)
            // });
            getUserEntries(loggedInUser._id)
                .then(res => handleSetEntry(res.data));
        }
    }, [id]);

    return (
        <>
            <Header />
            <div className="container">
                {user && <UserProfileHeader data={user} />}
                <div className="row">
                    {/* ProfileResume Component */}
                    <div className="col-3">
                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">Profile resume</h2>
                            </div>
                            <div className="section-box__body px-4">
                                {
                                    user && user.description &&
                                    <section className="content-box">
                                        <Link to="/settings"><h4 className="content-box__title">About Me</h4></Link>
                                        <p>{user.description}</p>
                                    </section>
                                }

                                {
                                    user && user.personality &&
                                    <section className="content-box">
                                        <Link to="/settings/personality"><h4 className="content-box__title">Personality</h4></Link>
                                        <div className="content-box__pills">
                                            {user.personality.map((e, i) =>
                                                <span className="pill-shape pill-shape--secondary" key={i}>{e.name}</span>
                                            )}
                                        </div>
                                    </section>
                                }

                                {
                                    user && user.life_style &&
                                    <section className="content-box">
                                        <Link to ="/settings/personality"><h4 className="content-box__title">Lifestyle</h4></Link>
                                        <div className="content-box__pills">
                                            {user.life_style.map((e, i) =>
                                                <span className="pill-shape pill-shape--primary" key={i}>{e.name}</span>
                                            )}
                                        </div>
                                    </section>
                                }

                                {
                                    user && user.hobbies &&
                                    <section className="content-box">
                                        <Link to ="/settings/music-hobbies"><h4 className="content-box__title">Hobbies</h4></Link>
                                        <div className="content-box__pills">
                                            {user.hobbies.map((e, i) =>
                                                <span className="pill-shape pill-shape--terciary" key={i}>{e.name}</span>
                                            )}
                                        </div>
                                    </section>
                                }
                            </div>
                        </section>
                    </div>

                    {/* ProfilePosts Component */}
                    <div className="col-6 px-4">
                        {
                            loggedInUser && !id &&
                            <PublishBox user={loggedInUser} set={(entry) => setEntries([entry, ...entries])} />
                        }

                        {
                            entries && entries.map((entry, i) => {
                                if (entry.hidden) {
                                    if (entry.author.id === loggedInUser._id)
                                        return <Entry key={i} entry={entry} setEntry={(entries) => { handleSetEntry(entries) }} />
                                } else
                                    return <Entry key={i} entry={entry} setEntry={(entries) => { handleSetEntry(entries) }} />
                            })
                        }
                    </div>

                    {/* ProfileAside Component */}
                    <div className="col-3">

                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">My Travels</h2>
                            </div>
                            <div className="section-box__body px-4">
                                <div className="image-grid">
                                    {user && user.my_travels.map((e, i) =>
                                        <div className="image-box" key={i}>
                                            <Link to={`travel/${e._id}`}>
                                                <img src={e.photos} />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">My Tours</h2>
                            </div>
                            <div className="section-box__body px-4">
                                <article className="tour-small">
                                    {
                                        user && user.my_tours.map((e, i) =>
                                            <Link to="/my-tours" key={i}>
                                                <div className="tour-small__img">
                                                    <img src={e.photos} />
                                                </div>
                                                <div className="tour-small__info">
                                                    <h2 className="tour-small__info__title">{e.name}</h2>
                                                    <p className="tour-small__info__subtitle">{e.tour_type}</p>
                                                    <div className="tour-small__info__stars"></div>
                                                </div>
                                            </Link>
                                        )}
                                </article>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export const ProfilePage = withProtected(Page);
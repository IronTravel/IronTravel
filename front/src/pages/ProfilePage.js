import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Header } from '../layout/Header';
import { UserCard } from '../components/UserCard';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { LikeButton } from '../components/LikeButton';

// Context
import { useUser, useUserSetter } from '../context/user';

// Service
import { getUser } from '../service/user'
import { getUserEntries } from '../service/entries';

export const ProfilePage = () => {

    const loggedInUser = useUser();
    const [user, setUser] = useState();
    const [entries, setEntries] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getUser(id).then(res => {
                setUser(res.data);
                getUserEntries(id).then(res => setEntries(res.data));
            });
        } else {
            setUser(loggedInUser);
            getUserEntries(loggedInUser._id).then(res => setEntries(res.data));
        }
    }, []);

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
                                        <h4 className="content-box__title">About Me</h4>
                                        <p>{user.description}</p>
                                    </section>
                                }

                                {
                                    user && user.personality.length > 0 &&
                                    <section className="content-box">
                                        <h4 className="content-box__title">Personality</h4>
                                        <div className="content-box__pills">
                                            {user.personality.map((e, i) =>
                                                <span className="pill-shape pill-shape--secondary" key={i}>{e.name}</span>
                                            )}
                                        </div>
                                    </section>
                                }

                                {
                                    user && user.life_style.length > 0 &&
                                    <section className="content-box">
                                        <h4 className="content-box__title">Lifestyle</h4>
                                        <div className="content-box__pills">
                                            {user.life_style.map((e, i) =>
                                                <span className="pill-shape pill-shape--primary" key={i}>{e.name}</span>
                                            )}
                                        </div>
                                    </section>
                                }

                                {
                                    user && user.hobbies.length > 0 &&
                                    <section className="content-box">
                                        <h4 className="content-box__title">Hobbies</h4>
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
                    {
                        entries &&
                        <div className="col-6 px-4">
                            <article className="post-box section-box section-box--shadow">
                                <header className="post-box__header">
                                    <UserCard avatarSize={38} name="John Smith" time="5 hours ago" />
                                </header>
                                <div className="post-box__body">
                                    <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
                                </div>
                                <footer className="post-box__footer">
                                    <LikeButton className="mr-4" />
                                    <div className="inline-objects">
                                        <div className="inline-objects__images">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                        </div>
                                        <div className="inline-objects__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
                                    </div>
                                </footer>
                            </article>
                            <article className="post-box section-box section-box--shadow">
                                <header className="post-box__header">
                                    <UserCard avatarSize={38} name="John Smith" time="5 hours ago" />
                                </header>
                                <div className="post-box__body">
                                    <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
                                </div>
                                <footer className="post-box__footer">
                                    <LikeButton className="mr-4" />
                                    <div className="inline-objects">
                                        <div className="inline-objects__images">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                        </div>
                                        <div className="inline-objects__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
                                    </div>
                                </footer>
                            </article>
                            <article className="post-box section-box section-box--shadow">
                                <header className="post-box__header">
                                    <UserCard avatarSize={38} name="John Smith" time="5 hours ago" />
                                </header>
                                <div className="post-box__body">
                                    <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
                                </div>
                                <footer className="post-box__footer">
                                    <LikeButton className="mr-4" />
                                    <div className="inline-objects">
                                        <div className="inline-objects__images">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                        </div>
                                        <div className="inline-objects__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
                                    </div>
                                </footer>
                            </article>
                            <article className="post-box section-box section-box--shadow">
                                <header className="post-box__header">
                                    <UserCard avatarSize={38} name="John Smith" time="5 hours ago" />
                                </header>
                                <div className="post-box__body">
                                    <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
                                </div>
                                <footer className="post-box__footer">
                                    <LikeButton className="mr-4" />
                                    <div className="inline-objects">
                                        <div className="inline-objects__images">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                        </div>
                                        <div className="inline-objects__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
                                    </div>
                                </footer>
                            </article>
                        </div>

                    }

                    {/* ProfileAside Component */}
                    <div className="col-3">
                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">My Travels</h2>
                            </div>
                            <div className="section-box__body px-4">
                                <div className="image-grid">
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                    <div className="image-box">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">My Tours</h2>
                            </div>
                            <div className="section-box__body px-4">
                                <article className="tour-small">
                                    <a href="#">
                                        <div className="tour-small__img">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </div>
                                        <div className="tour-small__info">
                                            <h2 className="tour-small__info__title">Madrid hidden secrets</h2>
                                            <p className="tour-small__info__subtitle">Walking tour</p>
                                            <div className="tour-small__info__stars"></div>
                                        </div>
                                    </a>
                                </article>
                                <article className="tour-small">
                                    <a href="#">
                                        <div className="tour-small__img">
                                            <img src="https://via.placeholder.com/150/150" />
                                        </div>
                                        <div className="tour-small__info">
                                            <h2 className="tour-small__info__title">Madrid hidden secrets</h2>
                                            <p className="tour-small__info__subtitle">Walking tour</p>
                                            <div className="tour-small__info__stars"></div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}
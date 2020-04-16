import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserCard } from '../components/UserCard';

import defaultAvatar from '../assets/images/avatar.png';
import heartIcon from '../assets/svgs/icon-heart.svg';

export const ProfilePage = () => {
    return (
        <>
            <Header />
            <div className="container">
                {/* ProfileHeader Component */}
                <div className="profile-header">
                    <div className="profile-header__bg">
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                    </div>
                    <div className="profile-header__info">
                        <div className="profile-header__info__data">
                            <div className="value">73</div>
                            <div className="key">Travels</div>
                        </div>
                        <div className="profile-header__info__data">
                            <div className="value">289</div>
                            <div className="key">Tours</div>
                        </div>
                        <div className="profile-header__info__data profile-header__info__data--user">
                            <div className="big-avatar">
                                <img src={defaultAvatar} alt="" />
                            </div>
                            <div className="value">John Smith</div>
                            <div className="key">Creative, Athlete, Running</div>
                        </div>
                        <div className="profile-header__info__data">
                            <div className="value">34K</div>
                            <div className="key">Followers</div>
                        </div>
                        <div className="profile-header__info__data">
                            <div className="value">789</div>
                            <div className="key">Following</div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    {/* ProfileResume Component */}
                    <div className="col-3">
                        <section className="section-box">
                            <div className="section-box__header">
                                <h2 className="section-box__title">Profile resume</h2>
                            </div>
                            <div className="section-box__body">
                                <section className="content-box">
                                    <h4 className="content-box__title">About Me</h4>
                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                </section>
                                <section className="content-box">
                                    <h4 className="content-box__title">Personality</h4>
                                    <div className="content-box__pills">
                                        <span className="pill-shape pill-shape--secondary">Creative</span>
                                        <span className="pill-shape pill-shape--secondary">Determined</span>
                                        <span className="pill-shape pill-shape--secondary">Empathetic</span>
                                        <span className="pill-shape pill-shape--secondary">Fun</span>
                                        <span className="pill-shape pill-shape--secondary">Honest</span>
                                        <span className="pill-shape pill-shape--secondary">Prankster</span>
                                        <span className="pill-shape pill-shape--secondary">Proactive</span>
                                    </div>
                                </section>
                                <section className="content-box">
                                    <h4 className="content-box__title">Lifestyle</h4>
                                    <div className="content-box__pills">
                                        <span className="pill-shape pill-shape--primary">Athlete</span>
                                        <span className="pill-shape pill-shape--primary">Movie lover</span>
                                        <span className="pill-shape pill-shape--primary">Culture enthusiast</span>
                                        <span className="pill-shape pill-shape--primary">Gamer</span>
                                        <span className="pill-shape pill-shape--primary">Travel junkie</span>
                                    </div>
                                </section>
                                <section className="content-box">
                                    <h4 className="content-box__title">Hobbies</h4>
                                    <div className="content-box__pills">
                                        <span className="pill-shape pill-shape--terciary">Running</span>
                                        <span className="pill-shape pill-shape--terciary">Volunteer Work</span>
                                        <span className="pill-shape pill-shape--terciary">Swimming</span>
                                        <span className="pill-shape pill-shape--terciary">Hiking</span>
                                        <span className="pill-shape pill-shape--terciary">Exercise</span>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>

                    {/* ProfilePosts Component */}
                    <div className="col-6 px-4">
                        <article className="post-box section-box section-box--shadow">
                            <header className="post-box__header">
                                <UserCard avatarSize={38} name="John Smith" time="5 hours ago" />
                            </header>
                            <div className="post-box__body">
                                <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
                            </div>
                            <footer className="post-box__footer">
                                <div className="btn-like mr-4">
                                    <button className="btn-like__icon">
                                        <img src={heartIcon} />
                                    </button>
                                    <span className="btn-like__count">15</span>
                                </div>
                                <div className="inline-avatars">
                                    <div className="inline-avatars__images">
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                    </div>
                                    <div className="inline-avatars__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
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
                                <div className="btn-like mr-4">
                                    <button className="btn-like__icon">
                                        <img src={heartIcon} />
                                    </button>
                                    <span className="btn-like__count">15</span>
                                </div>
                                <div className="inline-avatars">
                                    <div className="inline-avatars__images">
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                    </div>
                                    <div className="inline-avatars__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
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
                                <div className="btn-like mr-4">
                                    <button className="btn-like__icon">
                                        <img src={heartIcon} />
                                    </button>
                                    <span className="btn-like__count">15</span>
                                </div>
                                <div className="inline-avatars">
                                    <div className="inline-avatars__images">
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                    </div>
                                    <div className="inline-avatars__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
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
                                <div className="btn-like mr-4">
                                    <button className="btn-like__icon">
                                        <img src={heartIcon} />
                                    </button>
                                    <span className="btn-like__count">15</span>
                                </div>
                                <div className="inline-avatars">
                                    <div className="inline-avatars__images">
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                        <UserCard showBorder avatarSize={28} />
                                    </div>
                                    <div className="inline-avatars__text"><b>Michael,</b> <b>Astrid</b> and <br /> 6 more liked this</div>
                                </div>
                            </footer>
                        </article>
                    </div>

                    {/* ProfileAside Component */}
                    <div className="col-3">
                        <section className="section-box">
                            <div className="section-box__header">
                                <h2 className="section-box__title">My Travels</h2>
                            </div>
                            <div className="section-box__body">
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
                            <div className="section-box__header">
                                <h2 className="section-box__title">My Tours</h2>
                            </div>
                            <div className="section-box__body">
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
import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserCard } from '../components/UserCard';
import heartIcon from '../assets/svgs/icon-heart.svg';
import { UserProfileHeader } from '../components/UserProfileHeader';

export const ProfilePage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />

                <div className="row">

                    {/* ProfileResume Component */}
                    <div className="col-3">
                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">Profile resume</h2>
                            </div>
                            <div className="section-box__body px-4">
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
                                <div className="btn-like mr-4">
                                    <button className="btn-like__icon">
                                        <img src={heartIcon} />
                                    </button>
                                    <span className="btn-like__count">15</span>
                                </div>
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
                                <div className="btn-like mr-4">
                                    <button className="btn-like__icon">
                                        <img src={heartIcon} />
                                    </button>
                                    <span className="btn-like__count">15</span>
                                </div>
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
                                <div className="btn-like mr-4">
                                    <button className="btn-like__icon">
                                        <img src={heartIcon} />
                                    </button>
                                    <span className="btn-like__count">15</span>
                                </div>
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
import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import defaultAvatar from '../assets/images/avatar.png';
import StarIcon from '../assets/svgs/icon-star.svg';
import LikeIcon from '../assets/svgs/icon-like.svg';
import ProfileIcon from '../assets/svgs/icon-profile.svg';

export const SearchMatchPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />

                <div className="row">
                    <div className="col-3">
                        <article className="entity-card">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <div className="entity-card__body__avatar-wrapper">
                                    <div className="entity-card__body__avatar">
                                        <img src={defaultAvatar} alt="" />
                                    </div>
                                    <span className="entity-card__body__user-value">76</span>
                                </div>
                                <h2 className="entity-card__body__title">Tao Yi</h2>
                                <p className="entity-card__body__tagline">Creative, Travel junkie, Volunteer work</p>
                                <div className="entity-card__body__data">
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="key">
                                            <StarIcon />
                                        </div>
                                        <div className="value">73</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entity-card__footer">
                                <button className="entity-card__footer__btn">
                                    <LikeIcon />
                                    <span>Connect</span>
                                </button>
                                <button className="entity-card__footer__btn">
                                    <ProfileIcon />
                                    <span>Profile</span>
                                </button>
                            </footer>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <div className="entity-card__body__avatar-wrapper">
                                    <div className="entity-card__body__avatar">
                                        <img src={defaultAvatar} alt="" />
                                    </div>
                                    <span className="entity-card__body__user-value">76</span>
                                </div>
                                <h2 className="entity-card__body__title">Tao Yi</h2>
                                <p className="entity-card__body__tagline">Creative, Travel junkie, Volunteer work</p>
                                <div className="entity-card__body__data">
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="key">
                                            <StarIcon />
                                        </div>
                                        <div className="value">73</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entity-card__footer">
                                <button className="entity-card__footer__btn">
                                    <LikeIcon />
                                    <span>Connect</span>
                                </button>
                                <button className="entity-card__footer__btn">
                                    <ProfileIcon />
                                    <span>Profile</span>
                                </button>
                            </footer>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <div className="entity-card__body__avatar-wrapper">
                                    <div className="entity-card__body__avatar">
                                        <img src={defaultAvatar} alt="" />
                                    </div>
                                    <span className="entity-card__body__user-value">76</span>
                                </div>
                                <h2 className="entity-card__body__title">Tao Yi</h2>
                                <p className="entity-card__body__tagline">Creative, Travel junkie, Volunteer work</p>
                                <div className="entity-card__body__data">
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="key">
                                            <StarIcon />
                                        </div>
                                        <div className="value">73</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entity-card__footer">
                                <button className="entity-card__footer__btn">
                                    <LikeIcon />
                                    <span>Connect</span>
                                </button>
                                <button className="entity-card__footer__btn">
                                    <ProfileIcon />
                                    <span>Profile</span>
                                </button>
                            </footer>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <div className="entity-card__body__avatar-wrapper">
                                    <div className="entity-card__body__avatar">
                                        <img src={defaultAvatar} alt="" />
                                    </div>
                                    <span className="entity-card__body__user-value">76</span>
                                </div>
                                <h2 className="entity-card__body__title">Tao Yi</h2>
                                <p className="entity-card__body__tagline">Creative, Travel junkie, Volunteer work</p>
                                <div className="entity-card__body__data">
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="key">
                                            <StarIcon />
                                        </div>
                                        <div className="value">73</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entity-card__footer">
                                <button className="entity-card__footer__btn">
                                    <LikeIcon />
                                    <span>Connect</span>
                                </button>
                                <button className="entity-card__footer__btn">
                                    <ProfileIcon />
                                    <span>Profile</span>
                                </button>
                            </footer>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <div className="entity-card__body__avatar-wrapper">
                                    <div className="entity-card__body__avatar">
                                        <img src={defaultAvatar} alt="" />
                                    </div>
                                    <span className="entity-card__body__user-value">76</span>
                                </div>
                                <h2 className="entity-card__body__title">Tao Yi</h2>
                                <p className="entity-card__body__tagline">Creative, Travel junkie, Volunteer work</p>
                                <div className="entity-card__body__data">
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="key">
                                            <StarIcon />
                                        </div>
                                        <div className="value">73</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entity-card__footer">
                                <button className="entity-card__footer__btn">
                                    <LikeIcon />
                                    <span>Connect</span>
                                </button>
                                <button className="entity-card__footer__btn">
                                    <ProfileIcon />
                                    <span>Profile</span>
                                </button>
                            </footer>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <div className="entity-card__body__avatar-wrapper">
                                    <div className="entity-card__body__avatar">
                                        <img src={defaultAvatar} alt="" />
                                    </div>
                                    <span className="entity-card__body__user-value">76</span>
                                </div>
                                <h2 className="entity-card__body__title">Tao Yi</h2>
                                <p className="entity-card__body__tagline">Creative, Travel junkie, Volunteer work</p>
                                <div className="entity-card__body__data">
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="key">
                                            <StarIcon />
                                        </div>
                                        <div className="value">73</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entity-card__footer">
                                <button className="entity-card__footer__btn">
                                    <LikeIcon />
                                    <span>Connect</span>
                                </button>
                                <button className="entity-card__footer__btn">
                                    <ProfileIcon />
                                    <span>Profile</span>
                                </button>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}
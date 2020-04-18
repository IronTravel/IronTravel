import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { UserCard } from '../components/UserCard';
import NewEntity from '../assets/svgs/icon-new.svg';
import StarIcon from '../assets/svgs/icon-star.svg';

export const MyToursPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />

                <div className="row">
                    <div className="col-3">
                        <button className="entity-card entity-card--button">
                            <NewEntity />
                            <h4 className="entity-card--button__title">New tour</h4>
                            <p className="entity-card--button__tagline">Show your city to other travelers…</p>
                        </button>
                    </div>
                    <div className="col-3">
                        <article className="entity-card entity-card--travel">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <h2 className="entity-card__body__title">Madrid hidden secrets</h2>
                                <p className="entity-card__body__tagline">Walking tour</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical inline-objects--spread">
                                        <span className="mt-3 mb-2">Rating</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card entity-card--travel">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <h2 className="entity-card__body__title">Madrid hidden secrets</h2>
                                <p className="entity-card__body__tagline">Walking tour</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical inline-objects--spread">
                                        <span className="mt-3 mb-2">Rating</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card entity-card--travel">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <h2 className="entity-card__body__title">Madrid hidden secrets</h2>
                                <p className="entity-card__body__tagline">Walking tour</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical inline-objects--spread">
                                        <span className="mt-3 mb-2">Rating</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3">
                        <article className="entity-card entity-card--travel">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <h2 className="entity-card__body__title">Madrid hidden secrets</h2>
                                <p className="entity-card__body__tagline">Walking tour</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical inline-objects--spread">
                                        <span className="mt-3 mb-2">Rating</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}
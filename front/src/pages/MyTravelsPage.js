import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { UserCard } from '../components/UserCard';
import NewEntity from '../assets/svgs/icon-new.svg';

export const MyTravelsPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />

                <div className="row">
                    <div className="col-3">
                        <button className="entity-card entity-card--button">
                            <NewEntity />
                            <h4 className="entity-card--button__title">New travel</h4>
                            <p className="entity-card--button__tagline">The start of a new jorney…</p>
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
                                <h2 className="entity-card__body__title">Machu Pichu</h2>
                                <p className="entity-card__body__tagline">Last update: 2 hours ago</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical">
                                        <span className="mt-3 mb-2">Seen by</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
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
                                <h2 className="entity-card__body__title">Machu Pichu</h2>
                                <p className="entity-card__body__tagline">Last update: 2 hours ago</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical">
                                        <span className="mt-3 mb-2">Seen by</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
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
                                <h2 className="entity-card__body__title">Machu Pichu</h2>
                                <p className="entity-card__body__tagline">Last update: 2 hours ago</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical">
                                        <span className="mt-3 mb-2">Seen by</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
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
                                <h2 className="entity-card__body__title">Machu Pichu</h2>
                                <p className="entity-card__body__tagline">Last update: 2 hours ago</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical">
                                        <span className="mt-3 mb-2">Seen by</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
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
                                <h2 className="entity-card__body__title">Machu Pichu</h2>
                                <p className="entity-card__body__tagline">Last update: 2 hours ago</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical">
                                        <span className="mt-3 mb-2">Seen by</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
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
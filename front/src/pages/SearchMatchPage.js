import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import defaultAvatar from '../assets/images/avatar.png';

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
                                <div className="entity-card__body__avatar">
                                    <img src={defaultAvatar} alt="" />
                                </div>
                                <h2 className="entity-card__body__title">Tao Yi</h2>
                                <p className="entity-card__body__tagline">Creative, Travel junkie, Volunteer work</p>
                                <div className="entity-card__body__data">
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
                                    </div>
                                    <div className="entity-card__data">
                                        <div className="value">73</div>
                                        <div className="key">Travels</div>
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
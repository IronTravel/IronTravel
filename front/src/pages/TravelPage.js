import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserCard } from '../components/UserCard';
import { LikeButton } from '../components/LikeButton';

export const TravelPage = () => {
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
                    <article className="row travel-timeline__post">
                        <div className="col-4 text-right">
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
                        </div>
                        <div className="col-8">

                        </div>
                    </article>
                </div>
            </div>

        </>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoWeTravelSM from '../assets/svgs/logo-wetravel-sm.svg';
import chatIcon from '../assets/svgs/icon-chat.svg';
import bellIcon from '../assets/svgs/icon-bell.svg';
import { UserCard } from '../components/UserCard';

export const Header = () => {
    return (
        <header className="main-header">
            <div className="main-logo">
                <img src={LogoWeTravelSM} width="50" alt="" />
            </div>
            <div className="current-section">My Profile</div>
            <div className="header-search">
                <input type="search" />
            </div>
            <nav className="main-nav">
                <Link to="/my-travels">My Travels</Link>
                <Link to="/my-tours">My Tours</Link>
            </nav>
            <div className="user-menu">
                <button className="user-menu__icon-btn">
                    <img src={chatIcon} width="16" />
                </button>
                <button className="user-menu__icon-btn">
                    <img src={bellIcon} width="16" />
                </button>
                <button className="user-menu__user-btn">
                    <UserCard
                        avatar=""
                        name="John Smith"
                    />
                </button>
            </div>
        </header>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoWeTravelSM from '../assets/svgs/logo-wetravel-sm.svg';
import ChatIcon from '../assets/svgs/icon-chat.svg';
import BellIcon from '../assets/svgs/icon-bell.svg';
import { UserCard } from '../components/UserCard';

export const Header = () => {
    return (
        <header className="main-header">
            <div className="main-logo">
                <LogoWeTravelSM />
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
                    <ChatIcon />
                </button>
                <button className="user-menu__icon-btn">
                    <BellIcon />
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
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoWeTravelSM from '../assets/svgs/logo-wetravel-sm.svg';
import { UserCard } from '../components/UserCard';
import { Notifications } from '../components/Notifications';
import ChatIcon from '../assets/svgs/icon-chat.svg';
import BellIcon from '../assets/svgs/icon-bell.svg';

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
                <div className="user-menu__icon-btn">
                    <Notifications icon={<ChatIcon />} />
                </div>
                <div className="user-menu__icon-btn">
                    <Notifications icon={<BellIcon />} />
                </div>
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
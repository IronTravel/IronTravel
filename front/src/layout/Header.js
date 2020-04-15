import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoWeTravelSM from '../assets/svgs/logo-wetravel-sm.svg';

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
                <button>Chats</button>
                <button>Notifications</button>
                <button>
                    User here
                </button>
            </div>
        </header>
    )
}
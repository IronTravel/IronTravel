import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Context
import { useUserSetter } from "../context/user";

// Service
import { logout } from '../service/auth';

// Components
import LogoWeTravelSM from '../assets/svgs/logo-wetravel-sm.svg';
import { UserCard } from '../components/UserCard';
import { Notifications } from '../components/Notifications';
import ChatIcon from '../assets/svgs/icon-chat.svg';
import BellIcon from '../assets/svgs/icon-bell.svg';

export const Header = withRouter(({ history }) => {

    const setUser = useUserSetter();
    const handleLogOut = () => {
        logout().then(() => {
            console.log('here')
            setUser('');
            history.push('/auth')
        })
    }

    return (
        <header className="main-header" >
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
                <button className="user-menu__user-btn" onClick={handleLogOut}>
                    <UserCard
                        avatar=""
                        name="John Smith"
                    />
                </button>
            </div>
        </header>
    )
})
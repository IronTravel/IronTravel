import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Context
import { useUserSetter } from "../context/user";

// Service
import { logout } from '../service/auth';

//Context
import { useUser } from "../context/user";

// Components
import LogoWeTravelSM from '../assets/svgs/logo-wetravel-sm.svg';
import { UserCard } from '../components/UserCard';
import { DropDownMessages } from '../components/DropDownMessages';
import { DropDownMenu } from '../components/DropDownMenu';
import { MessageSquare, Bell, Settings, LogOut } from 'react-feather';

export const Header = withRouter(({ history }) => {

    const user = useUser()
    const setUser = useUserSetter();

    const handleLogOut = () => {
        logout().then(() => {
            setUser('');
            history.push('/auth')
        })
    }

    return (
        <header className="main-header">
            <div className="main-logo">
                <Link to="/settings"><LogoWeTravelSM /> </Link>
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
                    <DropDownMessages icon={<MessageSquare size={22} />} />
                </div>
                <div className="user-menu__icon-btn">
                    <DropDownMessages icon={<Bell size={22} />} />
                </div>
                {
                    user &&
                    <div className="user-menu__user-btn">
                        <DropDownMenu className="user-menu__user-btn"
                            icon={<UserCard avatar={user.avatar} name={user.fullName} />}>
                            <Link to="/settings">
                                <Settings size={15} />
                                <span>Settings</span>
                            </Link>
                            <button onClick={handleLogOut}>
                                <LogOut size={14} />
                                <span>Log out</span>
                            </button>
                        </DropDownMenu>
                    </div>
                }
            </div>
        </header>
    )
})

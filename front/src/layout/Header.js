import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';

// Service
import { logout } from '../service/auth';

//Context
import { useUser, useUserSetter } from "../context/user";

// Components
import LogoWeTravelSM from '../assets/svgs/logo-wetravel-sm.svg';
import { UserCard } from '../components/UserCard';
import { DropDownMessages } from '../components/DropDownMessages';
import { DropDownMenu } from '../components/DropDownMenu';
import { MessageSquare, Bell, Settings, LogOut, User } from 'react-feather';
import { searchUser } from '../service/search';
import { allUser } from '../service/user';

export const Header = withRouter(({ history }) => {

    const [search, setSearch] = useState("")

    const user = useUser()
    const setUser = useUserSetter();

    const handleLogOut = () => {
        logout().then(() => {
            setUser('');
            history.push('/auth')
        })
    }

    const handleSearch = e => {
        const query = e.target.value;
        searchUser(query).then(res => {
            setSearch(res.data)
        })
    };

    return (
        <header className="main-header">
            <div className="main-logo">
                <Link to="/profile"><LogoWeTravelSM /> </Link>
            </div>
            <div className="current-section">My Profile</div>
            <div className="header-search">
                <input type="search" name="search" placeholder="Search your favourite City"onChange={handleSearch}/>
                <div>
                    {search &&
                    search.map(e => <Link to={`/city/${e._id}`}>{e.name}</Link>)}
                </div>

            </div>
            <nav className="main-nav">
                <Link to="/my-travels">My Travels</Link>
                <Link to="/my-tours">My Tours</Link>
                <Link to="/search">All Users</Link>
            </nav>
            <div className="user-menu">
                <div className="user-menu__icon-btn">
                    <DropDownMessages icon={<MessageSquare size={22} />} quantity={0} />
                </div>
                <div className="user-menu__icon-btn">
                    <DropDownMessages icon={<Bell size={22} />} quantity={0} />
                </div>
                {
                    user &&
                    <div className="user-menu__user-btn">
                        <DropDownMenu icon={<UserCard avatar={user.avatar} name={user.fullName} />}>
                            <Link to="/profile">
                                <User size={15} />
                                <span>My Profile</span>
                            </Link>
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

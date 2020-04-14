import React from 'react'
import { withRouter } from 'react-router-dom';

// Context
import { useUser, useUserSetter } from "../context/user";

// Service
import { logout } from '../service';

export const HomePage = withRouter(({ history }) => {
    const user = useUser();
    const setUser = useUserSetter();
    const handleLogOut = () => {
        logout();
        setUser('');
        history.push('/auth')
    }
    return (
        <div>
            {user && <h1>{user.email}</h1>}
            <button onClick={handleLogOut} className="btn-logout">Logout</button>
        </div>
    )
})
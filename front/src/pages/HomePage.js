import React from 'react'


// Context
import { useUser, useUserSetter } from "../context/user";

// Service
import { logout } from '../service/auth';

export const HomePage = () => {
    const user = useUser();
    console.log("este es el usuario", user)
    const setUser = useUserSetter();
    const handleLogOut = () => {
        logout();
        setUser('');
    }
    return(
        <div>
           {user && <h1>{user.email}</h1>}
            <button onClick={handleLogOut} className="btn-logout">Logout</button>
        </div>
    )
}
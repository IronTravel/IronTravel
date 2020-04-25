import React from 'react'
import { withRouter, Redirect } from 'react-router-dom';

// Context
import { useUser, useUserSetter } from "../context/user";

// Service
import { logout } from '../service/auth';

export const HomePage = withRouter(({ history }) => {
  const user = useUser();
  const setUser = useUserSetter();
  const handleLogOut = () => {
    logout();
    setUser('');
    history.push('/auth')
  }
  return (
    <Redirect to="/auth" />
    // <div>
    //   {user && <h1>{user.email}</h1>}
    //   <button onClick={handleLogOut} className="btn-logout">Logout</button>
    // </div>
  )
})
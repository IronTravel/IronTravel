import React from "react";
import { Redirect } from "react-router-dom";

// Context
import { useUser } from '../context/user';

// Components
import { LoginForm } from '../components/Auth/LoginForm';
import { RegisterForm } from '../components/Auth/SignupForm';
import { AuthTabs } from '../components/Auth/AuthTabs';
import LogoWeTravel from '../assets/svgs/logo-wetravel.svg';

export const AuthPage = () => {

    const user = useUser();

    return (
        !user ?
            <div className='main-wrapper main-wrapper--sm'>
                <div className="row auth-content-wrapper" >
                    <div className="col col-6">
                        <LogoWeTravel className="mb-4" />
                        <h2 className="auth-title">Welcome to WeTravel</h2>
                        <p className="auth-tagline">Connect, travel together, create great memories...</p>
                        <p className="auth-intro">Register today and interact with out 4 billion active travelers from all around the globe. Find your next travel partner and create memories together!</p>
                    </div>
                    <div className="col col-6">
                        <AuthTabs selected={0}>
                            <LoginForm />
                            <RegisterForm />
                        </AuthTabs>
                    </div>
                </div >
                <div className="auth-bg"></div>
                <div className="auth-faces"></div>
            </div> :
            <Redirect to='/profile' />
    )
}

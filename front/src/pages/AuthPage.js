import React from "react";

// Components
import { LoginForm } from '../components/Auth/LoginForm';
import { RegisterForm } from '../components/Auth/SignupForm';
import { AuthTabs } from '../components/Auth/AuthTabs';
import LogoWeTravel from '../assets/svgs/logo-wetravel.svg';

export const AuthPage = () => {
    return (
        <>
            <div className="row auth-content-wrapper">
                <div className="col col-6">
                    <img className="mb-4" src={LogoWeTravel} alt="" />
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
            </div>
            <div className="auth-bg"></div>
            <div className="auth-faces"></div>
        </>
    )
}

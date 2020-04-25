import React from "react";
import { Link } from "react-router-dom";

import LogoWeTravel from '../assets/svgs/logo-wetravel.svg';

export const NotFoundPage = () => {

    return (
        <div className='main-wrapper main-wrapper--sm'>
            <div className="row special-content-wrapper">
                <div className="col col-12 text-center">
                    <LogoWeTravel className="mb-4" />
                    <h2 className="not-found-title">Oopsie! Something is missing…</h2>
                    <p className="not-found-tagline">It seems like we do not found what you searched for. The page you were looking for doesn't exist, isn't available or was loading incorrectly</p>
                    <Link className="not-found-btn" to="/profile">Back to Home</Link>
                </div>
            </div>
            <div className="special-bg"></div>
            <div className="bg-faces"></div>
        </div>
    )
}

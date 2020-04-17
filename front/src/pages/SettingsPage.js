import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';

export const SettingsPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />

                <div className="row">

                    {/* ProfileResume Component */}
                    <div className="col-3">
                        <section className="section-box">
                            <div className="section-box__header mb-0">
                                <h2 className="section-box__title px-4">Settings</h2>
                            </div>
                            <div className="section-box__body">
                                <a className="section-box__link section-box__link--active" href="#">Personal Information</a>
                                <a className="section-box__link" href="#">Account Settings</a>
                                <a className="section-box__link" href="#">Change Password</a>
                                <a className="section-box__link" href="#">Personality and Lifestyle</a>
                                <a className="section-box__link" href="#">Music and Hobbies</a>
                            </div>
                        </section>
                    </div>

                    {/* ProfilePosts Component */}
                    <div className="col-9 px-4">
                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">Personal Information</h2>
                            </div>
                            <div className="section-box__body px-4 pb-4">
                                <form>
                                    <div className="row">
                                        <div className="col col-6 mb-2">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="name">Name</label>
                                                <input className="field__input-text" placeholder="your name here" name="name" id="name" type="text" />
                                            </div>
                                        </div>
                                        <div className="col col-6 mb-2">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="lastname">Last Name</label>
                                                <input className="field__input-text" placeholder="your lastname here" name="lastname" id="lastname" type="text" />
                                            </div>
                                        </div>
                                        <div className="col col-6 mb-2">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="email">E-mail</label>
                                                <input className="field__input-text" placeholder="your email here" name="email" id="email" type="email" />
                                            </div>
                                        </div>
                                        <div className="col col-6 mb-2">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="birthday">Birthday</label>
                                                <input className="field__input-text" placeholder="your name here" name="birthday" id="birthday" type="text" />
                                            </div>
                                        </div>
                                        <div className="col col-6 mb-2">
                                            <div className="field-wrapper field-wrapper--select">
                                                <label className="field__label" htmlFor="gender">Gender</label>
                                                <select className="field__input-select" name="gender" id="gender">
                                                    <option className="placeholder" selected disabled>Select an option...</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col col-12">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="about-you">About you</label>
                                                <textarea className="field__input-textarea" placeholder="your name here" id="about-you" name="about-you" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field-wrapper--button">
                                        <button className="btn btn--primary btn--w-full" type="submit">Save</button>
                                    </div>
                                    <div className="form-errors"></div>
                                </form>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form'

// Components
import { Header } from '../../layout/Header';
import { UserProfileHeader } from '../../components/UserProfileHeader';

//Context
import { useUser, useUserSetter } from "../../context/user";

import { editPass } from '../../service/user';


export const ChangePassword = () => {


    const user = useUser()

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    const setUser = useUserSetter();
    
    const onFormSubmit = (data) => {
        console.log(data)
        if(data.newPassword === data.confirmNewPassword) {
            editPass(data)
                .then((res) => {
                    setUser(res.data)
                    setFormSubmitError(res.data.status)
                })

        }else{
            setFormSubmitError('New Password and Confirmed Password are diferents');
        }
    }

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
                                <Link to="/settings" className="section-box__link">Personal Information</Link>
                                <Link to="/"className="section-box__link">Account Settings</Link>
                                <Link to="/settings/change-password" className="section-box__link section-box__link--active">Change Password</Link>
                                <Link to="/settings/personality"className="section-box__link">Personality and Lifestyle</Link>
                                <Link to="/settings/music-hobbies"className="section-box__link">Music and Hobbies</Link>
                            </div>
                        </section>
                    </div>

                    {/* ProfilePosts Component */}
                    <div className="col-9 px-4">
                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">Change Password</h2>
                            </div>
                            <div className="section-box__body px-4 pb-4">
                                {user && 
                                <form onSubmit={handleSubmit(onFormSubmit)}>
                                    <div className="row">
                                        <div className="col col-12">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="password">Current Password*</label>
                                                <input className="field__input-text" placeholder="••••••••••••" name="password" id="password" type="password" ref={register({ required: true })}/>
                                            </div>
                                        </div>
                                        <div className="col col-12">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="newPassword">New Password</label>
                                                <input className="field__input-text" placeholder="Put your new password" name="newPassword" id="newPassword" type="password" ref={register({ required: true })}/>
                                            </div>
                                        </div>
                                        <div className="col col-12">
                                            <div className="field-wrapper">
                                                <label className="field__label" htmlFor="confirmNewPassword">Confirm New Password*</label>
                                                <input className="field__input-text" placeholder="Confirm your new password" name="confirmNewPassword" id="confirmNewPassword" type="password" ref={register({ required: true })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field-wrapper--button">
                                        <button className="btn btn--primary btn--w-full" type="submit">Save</button>
                                    </div>
                                    <div className="form-errors">{formSubmitError}</div>
                                </form>
                                }
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}
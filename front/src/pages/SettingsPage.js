import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import moment from 'moment'

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';

//Context
import { useUser, useUserSetter } from "../context/user";

//Service
import { editUser } from '../service/user';
import { whoami } from '../service/auth';

export const SettingsPage = () => {

    useEffect(() => {
        whoami().then((res) => {
            console.log(res.data)
        });

    }, []);

    const user = useUser()
    const setUser = useUserSetter();

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    const onFormSubmit = (data) => {
        console.log(data)
        editUser(data)
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
                toast("Information saved successfully!")
            })
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
                                <Link to="/settings" className="section-box__link section-box__link--active">Personal Information</Link>
                                {/* <Link to="/" className="section-box__link">Account Settings</Link> */}
                                <Link to="/settings/change-password" className="section-box__link">Change Password</Link>
                                <Link to="/settings/personality" className="section-box__link">Personality and Lifestyle</Link>
                                <Link to="/settings/music-hobbies" className="section-box__link">Music and Hobbies</Link>
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
                                {user &&
                                    <form onSubmit={handleSubmit(onFormSubmit)}>
                                        <div className="row">
                                            <div className="col col-6 mb-2">
                                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                                    <label className="field__label" htmlFor="name">Name</label>
                                                    <input className="field__input-text" placeholder="your name here" name="name" id="name" type="text" defaultValue={user.name} ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col col-6 mb-2">
                                                <div className={`field-wrapper ${errors?.lastName && 'field-wrapper--error'}`}>
                                                    <label className="field__label" htmlFor="lastName">Last Name</label>
                                                    <input className="field__input-text" placeholder="your lastName here" name="lastName" id="lastName" type="text" defaultValue={user.lastName} ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col col-6 mb-2">
                                                <div className={`field-wrapper ${errors?.email && 'field-wrapper--error'}`}>
                                                    <label className="field__label" htmlFor="email">E-mail</label>
                                                    <input className="field__input-text" placeholder="your email here" name="email" id="email" type="email" defaultValue={user.email} ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col col-6 mb-2">
                                                <div className="field-wrapper">
                                                    <label className="field__label" htmlFor="birthday">Birthday</label>
                                                    <input className="field__input-text" placeholder="your name here" name="birthday" id="birthday" type="date" defaultValue={user.dob && user.dob.date ? moment(user.dob.date).format('YYYY-MM-DD') : ""} ref={register} />
                                                </div>
                                            </div>
                                            <div className="col col-6 mb-2">
                                                <div className="field-wrapper field-wrapper--select">
                                                    <label className="field__label" htmlFor="gender">Gender</label>
                                                    <select className="field__input-select" name="gender" id="gender" defaultValue={user.gender} ref={register}>
                                                        <option className="placeholder" disabled>Select an option...</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="female">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col col-12">
                                                <div className="field-wrapper">
                                                    <label className="field__label" htmlFor="description">About you</label>
                                                    <textarea className="field__input-textarea" placeholder="about you here" id="about-you" name="description" rows="3" defaultValue={user.description} ref={register}></textarea>
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
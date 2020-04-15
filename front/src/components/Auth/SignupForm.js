import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { withRouter, Redirect } from 'react-router-dom';

//Context
import { useUser, useUserSetter } from "../../context/user";

//Service
import { signup } from "../../service/auth";

export const RegisterForm = withRouter(({ history }) => {

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();
    const setUser = useUserSetter();

    const onFormSubmit = (data) => {
        if (data.password === data.confirmPassword) {
            signup(data)
                .then((res) => {
                    setUser(res.data);
                    history.push("/");
                })
                .catch(e => setFormSubmitError(e.response.data.status))
        } else {
            setFormSubmitError('Password and Confirm Password must be equals');
        }
    }
    return (
        <section className="auth-card">
            <header className="auth-card__header">
                <h3 className="auth-card__header__title">Register to WeTravel</h3>
            </header>
            <div className="auth-card__body">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                        <label className="field__label" htmlFor="name">Name*</label>
                        <input className="field__input-text" placeholder="Your Name" name="name" id="name" type="text" ref={register({ required: true })} />
                    </div>
                    <div className={`field-wrapper ${errors?.lastname && 'field-wrapper--error'}`}>
                        <label className="field__label" htmlFor="lastname">Last Name*</label>
                        <input className="field__input-text" placeholder="Your Last Name" name="lastname" id="lastname" type="text" ref={register({ required: true })} />
                    </div>
                    <div className={`field-wrapper ${errors?.username && 'field-wrapper--error'}`}>
                        <label className="field__label" htmlFor="username">E-mail*</label>
                        <input className="field__input-text" placeholder="yourname@domain.com" name="username" id="username" type="text" ref={register({ required: true })} />
                    </div>
                    <div className={`field-wrapper ${errors?.password && 'field-wrapper--error'}`}>
                        <label className="field__label" htmlFor="password">Password*</label>
                        <input className="field__input-text" placeholder="••••••••••••" name="password" id="password" type="password" ref={register({ required: true })} />
                    </div>
                    <div className={`field-wrapper ${errors?.confirmPassword && 'field-wrapper--error'}`}>
                        <label className="field__label" htmlFor="confirmPassword">Confirm password*</label>
                        <input className="field__input-text" placeholder="••••••••••••" name="confirmPassword" id="confirmPassword" type="password" ref={register({ required: true })}></input>
                    </div>
                    <div className="field-wrapper--button mt-4">
                        <button className="btn btn--primary btn--w-full" type="submit">Create Account</button>
                    </div>
                    <div className="form-errors">{formSubmitError}</div>
                </form>
            </div>
        </section>
    )
})

import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { withRouter, Link } from 'react-router-dom';

//Context
import { useUserSetter } from '../../context/user';

//Service
import { login } from '../../service/auth';

export const LoginForm = withRouter(({ history }) => {

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    const setUser = useUserSetter();

    const onFormSubmit = (data) => {
        login(data)
            .then((res) => {
                setUser(res.data);
                history.push("/profile");
            })
            .catch(() => {
                setFormSubmitError('Wrong Email or Password. Please, verify and try again.');
            })
    }
    return (
        <section className="auth-card">
            <header className="auth-card__header">
                <h3 className="auth-card__header__title">Login to your account</h3>
            </header>
            <div className="auth-card__body">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className={`field-wrapper ${errors?.username && 'field-wrapper--error'}`}>
                        <label className="field__label" htmlFor="username">E-mail*</label>
                        <input className="field__input-text" placeholder="yourname@domain.com" name="username" id="username" type="text" ref={register({ required: true })} />
                    </div>
                    <div className={`field-wrapper ${errors?.password && 'field-wrapper--error'}`}>
                        <label className="field__label" htmlFor="password">Password*</label>
                        <input className="field__input-text" placeholder="••••••••••••" name="password" id="password" type="password" ref={register({ required: true })} />
                    </div>
                    <div className="field-wrapper--button">
                        <button className="btn btn--primary btn--w-full" type="submit">Login</button>
                    </div>
                    <div className="form-errors">{formSubmitError}</div>
                </form>
                <section className="social-auth">
                    <a href="#" className="btn btn--facebook mb-2">Login with Facebook</a>
                    <a href="http://localhost:3005/auth/google/login" className="btn btn--google">Login with Google</a>
                </section>
            </div>
        </section>
    )
})

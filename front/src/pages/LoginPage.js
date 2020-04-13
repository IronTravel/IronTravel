import React, { useState } from "react";
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { withRouter, Redirect } from 'react-router-dom';

//Context
import { useUser, useUserSetter } from "../context/user";

//Service
import { login } from "../service";

export const LoginPage = withRouter(({ history }) => {
    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    const user = useUser();
    const setUser = useUserSetter();

    const onFormSubmit = (data) => {
        login(data)
            .then((res) => {
                setUser(res.data);
                history.push("/");
            })
            .catch(() => {
                setFormSubmitError('Wrong Username or Password. Please, verify and try again.');
            })
    }
    return (
        <>
            <div>
                <h2>Welcome to weTravel</h2>
                <p className="tagline">Connect, travel together, create great memories...</p>
                <p>Register today and interact with out 4 billion active travelers from all around the globe. Find your next travel partner and create memories together!</p>
            </div>
            <div>
                <section className="floating-card">
                    <header className="floating-card__header">
                        <h3 className="floating-card__header__title">Login to your account</h3>
                    </header>
                    <div className="floating-card__body">
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <div class="field-wrapper">
                                <label class="field__label">email</label>
                                <input class="field__input-text" name="username" id="username" type="text" ref={register({ required: true })}></input>
                            </div>
                            <div class="field-wrapper">
                                <label class="field__label">Password</label>
                                <input class="field__input-text" name="password" id="password" type="password" ref={register({ required: true })}></input>
                            </div>
                            <div class="field-wrapper--button">
                                <button class="btn btn--primary" type="submit">Login</button>
                            </div>
                        </form>
                        <section>
                            <button class="btn btn--facebook">Login with Facebook</button>
                            <button class="btn btn--google">Login with Google</button>
                            <p>Don’t have an account? <Link className="link link--primary">Register Now!</Link> I’ts really simple</p>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
})

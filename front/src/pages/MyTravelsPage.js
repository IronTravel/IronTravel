import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Modali, { useModali } from 'modali';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { UserCard } from '../components/UserCard';
import NewEntity from '../assets/svgs/icon-new.svg';

import { allTravel, createTravel } from '../service/travel';

export const MyTravelsPage = () => {

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();
    const [newTravelModal, setNewTravelModal] = useModali({ title: 'New Travel' });

    const [userTravel, SetUserTravel] = useState([])

    const fetchUserTravel = () => allTravel().then(userTravel => SetUserTravel(userTravel.data));

    const onNewTravelFormSubmit = (data) => {
        console.log(data)
        createTravel(data)
            .then((res) => {
                fetchUserTravel()
                setFormSubmitError(res.data.status)
            }) 
    }

    useEffect(() => {
        fetchUserTravel()
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />
                <div className="row">
                    <div className="col-3">
                        <button className="entity-card entity-card--button" onClick={setNewTravelModal}>
                            <NewEntity />
                            <h4 className="entity-card--button__title">New travel</h4>
                            <p className="entity-card--button__tagline">The start of a new jorney…</p>
                        </button>
                    </div>
                    {userTravel.my_travels && userTravel.my_travels.map((e,i) => 
                    <div className="col-3" key={i}>
                        <article className="entity-card entity-card--travel">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <h2 className="entity-card__body__title">{e.name}</h2>
                                <p className="entity-card__body__tagline">Last update: 2 hours ago</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical">
                                        <span className="mt-3 mb-2">Seen by</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                            <UserCard showBorder avatarSize={28} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            <Modali.Modal {...newTravelModal} className="modal">
                <div className="auth-card__body">
                    <strong className="mb-2">Help us find better matches for you!</strong>
                    <p className="mb-4">Tell us a little bit more about you, complete the questions below and we will match you more accurately.</p>
                    <form onSubmit={handleSubmit(onNewTravelFormSubmit)}>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="name">Title or name*</label>
                            <input className="field__input-text" placeholder="Add a name to identify your travel" name="name" id="name" type="text" ref={register({ required: true })} />
                        </div>
                        <div className="row">
                            <div className="col-6 pr-1">
                                <div className="field-wrapper">
                                    <label className="field__label" htmlFor="from">From</label>
                                    <input className="field__input-text" placeholder="From" name="from" id="from" type="date" ref={register({ required: false })} />
                                </div>
                            </div>
                            <div className="col-6 pl-1">
                                <div className="field-wrapper">
                                    <label className="field__label" htmlFor="to">To</label>
                                    <input className="field__input-text" placeholder="To" name="to" id="to" type="date" ref={register({ required: false })} />
                                </div>
                            </div>
                        </div>
                        <div className="field-wrapper">
                            <label className="field__label" htmlFor="country">Country</label>
                            <input className="field__input-text" placeholder="Your destination" name="country" id="country" type="text" ref={register({ required: false })} />
                        </div>
                        <div className="field-wrapper--button mt-4">
                            <button className="btn btn--primary btn--w-full" type="submit" onClick={setNewTravelModal}>Create</button>
                        </div>
                        <div className="form-errors">{formSubmitError}</div>
                    </form>
                </div>
            </Modali.Modal>
        </>
    )
}

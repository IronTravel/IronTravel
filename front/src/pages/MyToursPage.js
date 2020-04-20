import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'

import Modali, { useModali } from 'modali';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { UserCard } from '../components/UserCard';
import NewEntity from '../assets/svgs/icon-new.svg';
import StarIcon from '../assets/svgs/icon-star.svg';

import { allTours, createTour } from '../service/tour';

export const MyToursPage = () => {

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();
    const [newTourModal, setNewTourModal] = useModali({ title: 'New Tour' });
    
    const [userTour , SetUserTour] = useState([])

    const fetchUserTour = () => allTours().then(userTours => SetUserTour(userTours.data));

    console.log(userTour)

    const onNewTourFormSubmit = (data) => {
        console.log("HOLAAAAAAAAAAAAaaaa", data)
       createTour(data)
          .then((res) => {
               fetchUserTour()
               setFormSubmitError(res.data.status)
        }) 
    }
    
    useEffect(() => {
        fetchUserTour()
    }, [])
    
    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />
                <div className="row">
                    <div className="col-3">
                        <button className="entity-card entity-card--button" onClick={setNewTourModal}>
                            <NewEntity />
                            <h4 className="entity-card--button__title">New tour</h4>
                            <p className="entity-card--button__tagline">Show your city to other travelers…</p>
                        </button>
                    </div>
                    {userTour.my_tours && userTour.my_tours.map((e,i) => 
                    <div className="col-3" key={i}>
                        <article className="entity-card entity-card--travel">
                            <header className="entity-card__header">
                                <div className="entity-card__header__bg">
                                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                </div>
                            </header>
                            <div className="entity-card__body">
                                <h2 className="entity-card__body__title">{e.name}</h2>
                                <p className="entity-card__body__tagline">{e.tour_type}</p>
                                <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical inline-objects--spread">
                                        <span className="mt-3 mb-2">Rating</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
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
            <Modali.Modal {...newTourModal} className="modal">
                <div className="auth-card__body">
                    <strong className="mb-2">Help us find better matches for you!</strong>
                    <p className="mb-4">Tell us a little bit more about you, complete the questions below and we will match you more accurately.</p>
                    <form onSubmit={handleSubmit(onNewTourFormSubmit)}>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="name">Title or name*</label>
                            <input className="field__input-text" placeholder="Add a name to identify your travel" name="name" id="name" type="text" ref={register({ required: true })} />
                        </div>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="name">Type</label>
                            <input className="field__input-text" placeholder="What kind of tour??" name="type" id="Type" type="text" ref={register({ required: true })} />
                        </div>
                        <div className="row">
                            <div className="col-6 pr-1">
                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="from">City</label>
                                    <input className="field__input-text" placeholder="City" name="city" id="city" type="text" ref={register({ required: true })} />
                                </div>
                            </div>
                            <div className="col-6 pl-1">
                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="to">Country</label>
                                    <input className="field__input-text" placeholder="Country" name="country" id="country" type="text" ref={register({ required: false })} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 pr-1">
                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="from">Start</label>
                                    <input className="field__input-text" placeholder="Start" name="start" id="start" type="date" ref={register({ required: true })} />
                                </div>
                            </div>
                            <div className="col-6 pl-1">
                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}> 
                                    <label className="field__label" htmlFor="to">End</label>
                                    <input className="field__input-text" placeholder="End" name="end" id="end" type="date" ref={register({ required: true })} />
                                </div>
                            </div>
                        </div>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="description">Description</label>
                            <textarea className="field__input-textarea" placeholder="tell us more" id="description" name="description" rows="3" ref={register({ required: true })}></textarea>
                        </div>
                        <div className="field-wrapper--button mt-4">
                            <button className="btn btn--primary btn--w-full" type="submit" onClick={setNewTourModal}>Create</button>
                        </div>
                        <div className="form-errors">{formSubmitError}</div>
                    </form>
                </div>
            </Modali.Modal>
        </>
    )
}

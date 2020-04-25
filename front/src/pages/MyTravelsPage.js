import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modali, { useModali } from 'modali';
import Select from 'react-select'
import moment from 'moment'

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import NewEntity from '../assets/svgs/icon-new.svg';

import { allTravel, createTravel, deleteTravel, getTravel, editTravel } from '../service/travel';
import { allCountries } from '../service/data'
import { Edit, Trash2, MoreVertical } from 'react-feather';
import { DropDownMenu } from '../components/DropDownMenu';

export const MyTravelsPage = () => {

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors, setValue } = useForm();
    const [newTravelModal, setNewTravelModal] = useModali({ title: 'New Travel' });
    const [editTravelModal, setEditTravelModal] = useModali({ title: 'Edit Travel' });
    const [deleteTravelModal, setDeleteTravelModal] = useModali({ title: 'Delete Travel' });

    const [countries, setCountries] = useState([])
    const [userTravel, setUserTravel] = useState([])
    const [travel, setTravel] = useState()
    const [idTravel, setIDTravel] = useState()
    const [editOneTravel, setEditOneTravel] = useState()

    const fetchUserTravel = () => allTravel().then(userTravel => setUserTravel(userTravel.data));

    const onNewTravelFormSubmit = (data) => {
        createTravel(data)
            .then((res) => {
                setUserTravel(res.data.my_travels)
                setNewTravelModal()
            })
            .catch(res => setFormSubmitError(res.data.status))
    }

    const onUpdateSubmit = (data) => {
        const id = idTravel
        editTravel(data, id)
            .then((res) => {
                setEditOneTravel(res.data)
                fetchUserTravel()
                setFormSubmitError(res.data.status)
            })
    };

    //SELECT2 CONFIGURATION
    // const [reactSelect, setReactSelect] = useState({
    //     selectedOption: []
    // });

    const handleCountrySelection = selectedOption => {
        setValue("country", selectedOption);
        // setReactSelect({ selectedOption });
    };

    useEffect(() => {
        fetchUserTravel()
        allCountries()
            .then(allcountries => setCountries(allcountries.data))
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
                    {userTravel && userTravel.map((travel, i) =>
                        <div className="col-3" key={i}>
                            <article className="entity-card entity-card--travel">

                                <header className="entity-card__header">
                                    <Link to={`travel/${travel._id}`}>
                                        <div className="entity-card__header__bg">
                                            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                                        </div>
                                    </Link>
                                </header>

                                <div className="entity-card__body">
                                    <DropDownMenu icon={<MoreVertical size={16} />}>
                                        <button className="button" onClick={() => {
                                            setEditTravelModal()
                                            console.log(travel._id)
                                            getTravel(travel._id).then((res) => setEditOneTravel(res.data))
                                        }}>
                                            <Edit size={14} />
                                            <span>Edit</span>
                                        </button>
                                        <button className="button" onClick={() => {
                                            setDeleteTravelModal()
                                            setTravel(travel._id)
                                        }}>
                                            <Trash2 size={14} />
                                            <span>Delete</span>
                                        </button>
                                    </DropDownMenu>

                                    <h2 className="entity-card__body__title">{travel.name}</h2>
                                    {
                                        travel.entries.length > 0 &&
                                        <p className="entity-card__body__tagline">Last update: 2 hours ago</p>
                                    }

                                    <div className="entity-card__body__data">
                                        {
                                            travel.likes &&
                                            <>
                                                <span className="mt-3 mb-2">Seen by</span>
                                                <LikesFaces entries={entry.likes} />
                                            </>
                                        }
                                    </div>
                                </div>
                            </article>
                        </div>
                    )}
                </div>
            </div>

            {/* Create Modal */}
            <Modali.Modal {...newTravelModal} className="modal">
                <div className="auth-card__body">
                    <strong className="mb-2">Yeih! a new exciting trip coming soon!</strong>
                    <p className="mb-4">Tell us a little bit more about your travel, so we can create a record for you.</p>
                    <form onSubmit={handleSubmit(onNewTravelFormSubmit)}>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="name">Title or name*</label>
                            <input className="field__input-text" placeholder="Add a name to identify your travel" name="name" id="name" type="text" ref={register({ required: true })} />
                        </div>
                        <div className="row">
                            <div className="col-6 pr-1">
                                <div className={`field-wrapper ${errors?.from && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="from">From</label>
                                    <input className="field__input-text" placeholder="From" name="from" id="from" type="date" ref={register({ required: false })} />
                                </div>
                            </div>
                            <div className="col-6 pl-1">
                                <div className={`field-wrapper ${errors?.to && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="to">To</label>
                                    <input className="field__input-text" placeholder="To" name="to" id="to" type="date" ref={register({ required: false })} />
                                </div>
                            </div>
                        </div>
                        <div className={`field-wrapper ${errors?.country && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="select">Select</label>
                            <Select
                                className="reactSelect"
                                name="country"
                                placeholder="Your destination"
                                onChange={handleCountrySelection}
                                options={countries.map(country => {
                                    return {
                                        value: country._id,
                                        label: country.name
                                    }
                                })}
                                ref={register({ name: "country", required: true })}
                            />
                        </div>

                        <div className="field-wrapper--button mt-4">
                            <button className="btn btn--primary btn--w-full" type="submit">Create</button>
                        </div>
                        <div className="form-errors">{formSubmitError}</div>
                    </form>
                </div>
            </Modali.Modal>

            {/* Edit Modal */}
            <Modali.Modal {...editTravelModal} className="modal">
                <div className="auth-card__body">
                    <strong className="mb-2">Was something wrong? No problem, change what you need!</strong>
                    <p className="mb-4">Just keep in mind that if you connect your travel with a social network, you won't be able to change it's dates.</p>

                    {editOneTravel &&

                        <form onSubmit={handleSubmit(onUpdateSubmit)}>
                            <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                <label className="field__label" htmlFor="name">Title or name*</label>
                                <input className="field__input-text" placeholder="Add a name to identify your travel" defaultValue={editOneTravel?.name} name="name" id="name" type="text" ref={register({ required: true })} />
                            </div>
                            <div className="row">
                                <div className="col-6 pr-1">
                                    <div className="field-wrapper">
                                        <label className="field__label" htmlFor="from">From</label>
                                        <input className="field__input-text" placeholder="From" name="from" id="from" type="date" defaultValue={editOneTravel?.from ? moment(editOneTravel?.from).format('YYYY-MM-DD') : ""} ref={register({ required: false })} />
                                    </div>
                                </div>
                                <div className="col-6 pl-1">
                                    <div className="field-wrapper">
                                        <label className="field__label" htmlFor="to">To</label>
                                        <input className="field__input-text" placeholder="To" name="to" id="to" type="date" defaultValue={editOneTravel?.to ? moment(editOneTravel?.to).format('YYYY-MM-DD') : ""} ref={register({ required: false })} />
                                    </div>
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <label className="field__label" htmlFor="select">Select</label>
                                <Select
                                    className="reactSelect"
                                    name="country"
                                    placeholder="Your destination"
                                    onChange={handleCountrySelection}
                                    options={countries?.map(country => ({
                                        value: country._id,
                                        label: country.name
                                    }))}
                                    defaultValue={{
                                        value: editOneTravel?.country._id,
                                        label: editOneTravel?.country.name
                                    }}
                                    ref={register({ name: "country", required: true })}
                                />
                            </div>

                            <div className="field-wrapper--button mt-4">
                                <button className="btn btn--primary btn--w-full" type="submit" onClick={() => {
                                    setIDTravel(editOneTravel._id)
                                    setEditTravelModal()
                                }}>Edit</button>
                            </div>
                            <div className="form-errors">{formSubmitError}</div>
                        </form>
                    }
                </div>
            </Modali.Modal>

            {/* Delete Modal */}
            <Modali.Modal {...deleteTravelModal} className="modal">
                <div className="auth-card__body">
                    <p className="mb-3"><strong> You are about to delete a Travel. This is an irreversible action, are you sure you want to continue?</strong></p>
                    <div>
                        <Modali.Button label="Delete"
                            isStyleDestructive onClick={() => {
                                deleteTravel(travel)
                                    .then(() => {
                                        fetchUserTravel()
                                        setDeleteTravelModal()
                                    })
                            }}
                        />
                    </div>
                </div>
            </Modali.Modal>

        </>
    )
}

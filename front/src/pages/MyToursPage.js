import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import moment from 'moment'

import Modali, { useModali } from 'modali';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import NewEntity from '../assets/svgs/icon-new.svg';
import StarIcon from '../assets/svgs/icon-star.svg';
import { Edit, Trash2, MoreVertical } from 'react-feather';
import { DropDownMenu } from '../components/DropDownMenu';
import { Save } from 'react-feather';

import { allTours, createTour, editTour, oneTour, deleteTour, updateImageTour } from '../service/tour';
import { allCountries } from '../service/data'



export const MyToursPage = () => {

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors, setValue } = useForm();
    const [newTourModal, setNewTourModal] = useModali({ title: 'New Tour' });
    const [editTourModal, setEditTourModal] = useModali({ title: 'Edit Tour' });
    const [editImageModal, setEditImageModal] = useModali({ title: 'Update Image' });
    const [deleteTourModal, setDeleteTourModal] = useModali({ title: 'Delete Tour' });
    
    const [countries, setCountries] = useState([])
    const [userTour , SetUserTour] = useState([])
    const [tour, setTour] = useState()
    const [idTour, setIDTour] = useState()
    const [editOneTour, setEditOneTour] = useState()

    const [hasImageLoaded, setHasImageLoaded] = useState(false);


    const fetchUserTour = () => allTours().then(userTours => SetUserTour(userTours.data));

    // const fetchCountries = () => allCountries().then(allcountries => setCountries(allcountries.data))

    const handleChange = (e) => setHasImageLoaded(!!e.target.files.length)

    const cloudinary = require("cloudinary-core");


//Nombre del cloudinary que sale en la web
const cl = cloudinary.Cloudinary.new({ cloud_name: "dbfbhlyxp" });


    const onNewTourFormSubmit = (data) => {
       createTour(data)
          .then((res) => {
               fetchUserTour()
               setNewTourModal()
            
        }) 
        .catch(res => setFormSubmitError(res.data.status))
    }

    const onUpdateSubmit = (data) => {
        console.log(idTour)
        const id = idTour
        
        console.log(data)
        console.log(idTour)
        editTour(data, id)
        .then((res) => {
            setEditOneTour(res.data)
            fetchUserTour()
            setEditTourModal()
             
         })
         .catch(res => setFormSubmitError(res.data.status))
      };

      const handleCountrySelection = selectedOption => {
        setValue("country", selectedOption);
        // setReactSelect({ selectedOption });
    };

      const onUpdateImageSubmit = (data, e) => {
        const myAvatar = data.avatar[0];
        console.log(idTour)
        const id = idTour
        console.log(myAvatar)
        console.log(id)
        updateImageTour(myAvatar, id)
            .then((res) => {
                console.log("changed file")
                setEditOneTour(res.data)
                fetchUserTour()
                setEditImageModal()
            })
            .catch((error) => {
                console.log("error updating")
                console.log(error)
            })
      }
    
    useEffect(() => {
        fetchUserTour()
        // fetchCountries()
        allCountries()
        .then(allcountries => setCountries(allcountries.data))
    }, [])
    

    console.log(editOneTour)
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
                                    <img src={e.photos[0]} alt="" />
                                </div>
                            </header>
                            {/* <button className="button" onClick={() => {
                                    setEditTourModal()
                                    oneTour(e._id).then((res)=> setEditOneTour(res.data))}} />
                                <button className="button" onClick={()=>{ 
                                    setDeleteTourModal()
                                    setTour(e._id)
                                    }} /> */}
                            <div className="entity-card__body">
                            <DropDownMenu icon={<MoreVertical size={16} />}>
                                        <button className="button" onClick={() => {
                                    setEditTourModal()
                                    oneTour(e._id).then((res)=> setEditOneTour(res.data))}} >
                                            <Edit size={14} />
                                            <span>Edit</span>
                                        </button>
                                        <button className="button" onClick={() => {
                                            setDeleteTourModal()
                                            setTour(e._id)
                                        }}>
                                            <Trash2 size={14} />
                                            <span>Delete</span>
                                        </button>
                                        <button className="button" onClick={() => {
                                            setEditImageModal()
                                            oneTour(e._id).then((res)=> setEditOneTour(res.data))
                                            
                                        }}>
                                            <Edit size={14} />
                                            <span>Update Image</span>
                                        </button>
                                    </DropDownMenu>
                                <h2 className="entity-card__body__title">{e.name}</h2>
                                <p className="entity-card__body__tagline">{e.tour_type}</p>
                                <p className="entity-card__body__tagline">Description: {e.description}</p>
                                {/* <div className="entity-card__body__data">
                                    <div className="inline-objects inline-objects--vertical inline-objects--spread">
                                        <span className="mt-3 mb-2">{e.description}</span>
                                        <div className="inline-objects__images inline-objects__images--centered">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div> */}
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
                        
                            
                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="from">City</label>
                                    <input className="field__input-text" placeholder="City" name="city" id="city" type="text" ref={register({ required: true })} />
                                </div>
                            
                            
                            <div className={`field-wrapper ${errors?.country && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="select">Select</label>
                                <Select
                                    className="reactSelect"
                                    name="country"
                                    placeholder="Country"
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
                            <button className="btn btn--primary btn--w-full" type="submit">Create</button>
                        </div>
                        <div className="form-errors">{formSubmitError}</div>
                    </form>
                </div>
            </Modali.Modal>

            {/* Edit Modal */}
            <Modali.Modal {...editTourModal} className="modal">
                <div className="auth-card__body">
                    <strong className="mb-2">Edit yor Tour</strong>
                    
                    {editOneTour && 

                    <form onSubmit={handleSubmit(onUpdateSubmit)}>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                           <label className="field__label" htmlFor="name">Title or name*</label>
                            <input className="field__input-text" placeholder="Add a name to identify your travel" defaultValue={editOneTour.name} name="name" id="name" type="text" ref={register({ required: true })} />
                        </div>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="name">Type</label>
                            <input className="field__input-text" placeholder="What kind of tour??" defaultValue={editOneTour.tour_type} name="type" id="Type" type="text" ref={register({ required: true })} />
                        </div>

                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="from">City</label>
                                    <input className="field__input-text" placeholder="City" defaultValue={editOneTour.city} name="city" id="city" type="text" ref={register({ required: true })} />
                                </div>
                                <div className="field-wrapper">
                                <label className="field__label" htmlFor="select">Select</label>
                                <Select
                                    className="reactSelect"
                                    name="country"
                                    placeholder="Country"
                                    onChange={handleCountrySelection}
                                    options={countries?.map(country => ({
                                        value: country._id,
                                        label: country.name
                                    }))}
                                    
                                    // defaultValue={{
                                        
                                    //     value: editOneTour?.country._id,
                                    //     label: editOneTour?.country.name
                                    // }}
                                    ref={register({ name: "country", required: true })}
                                />
                            </div>

                        <div className="row">
                            <div className="col-6 pr-1">
                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                                    <label className="field__label" htmlFor="from">Start</label>
                                    <input className="field__input-text" placeholder="Start" defaultValue={editOneTour.start_date ? moment(editOneTour.start_date).format('YYYY-MM-DD') : ""} name="start" id="start" type="date" ref={register({ required: true })} />
                                </div>
                            </div>
                            <div className="col-6 pl-1">
                                <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}> 
                                    <label className="field__label" htmlFor="to">End</label>
                                    <input className="field__input-text" placeholder="End" defaultValue={editOneTour.end_date ? moment(editOneTour.end_date).format('YYYY-MM-DD') : ""} name="end" id="end" type="date" ref={register({ required: true })} />
                                </div>
                            </div>
                        </div>
                        <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
                            <label className="field__label" htmlFor="description">Description</label>
                            <textarea className="field__input-textarea" placeholder="tell us more" id="description" defaultValue={editOneTour.description} name="description" rows="3" ref={register({ required: true })}></textarea>
                        </div>
                        <div className="field-wrapper--button mt-4">
                            <button className="btn btn--primary btn--w-full" type="submit" onClick={() => {
                                setIDTour(editOneTour._id)
                                }}>Edit</button>
                        </div>
                        <div className="form-errors">{formSubmitError}</div>
                    </form>
                    }
                </div>
            </Modali.Modal>


            {/* Update Image Modal */}
            <Modali.Modal {...editImageModal} className="modal">
                <div className="auth-card__body">
                    <div>
                        <strong className="mb-2">Change Image!!</strong>
                    </div>
                    {editOneTour && 
                    <form onSubmit={handleSubmit(onUpdateImageSubmit)}>
                        <div>
                            <label className="field__label" htmlFor="name">Type</label>
                            <input className="big-avatar__upload-btn" type="file"
                                                name="avatar"
                                                accept="image/png, image/jpeg"
                                                onChange={(e) => handleChange(e)}
                                                ref={register()} />

                            <button className="big-avatar__save" type="submit"onClick={() => {
                                    console.log("en el modaaaal", editOneTour._id)
                                    setIDTour(editOneTour._id)
                                    setEditImageModal()}}>
                                    <Save size={20} />
                            </button>
                        </div>
                    </form>
                    }
                </div>
            </Modali.Modal>

            {/* Delete Modal */}
            <Modali.Modal {...deleteTourModal} className="modal">
            <div className="auth-card__body">
                <p className="mb-3"><strong> You are about to delete a Tour. This is an irreversible action, are you sure you want to continue?</strong></p>
                <div>
                    <Modali.Button label="Delete"
                        isStyleDestructive onClick={() => {
                            deleteTour(tour).then(fetchUserTour())
                            setDeleteTourModal()
                        }}
                    />
                </div>
                </div>
            </Modali.Modal>
        </>
    )
}

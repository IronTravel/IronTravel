import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

//Context
import { useUser, useUserSetter } from "../../context/user";

import { editUser } from '../../service/user';

export const PersonallInformation = () => {

    const user = useUser()

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    const setUser = useUserSetter();

    const onFormSubmit = (data) => {
        editUser(data)
            .then((res) => {
                setUser(res.data)
            })
        .catch(e => setFormSubmitError(e.response.data.status))
}


    return(
        <div>
            <h1>Personal Information</h1>
        {user && 
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={`field-wrapper ${errors?.name && 'field-wrapper--error'}`}>
            <label>Name*</label>
            <input placeholder={user.name} name="name" defaultValue={user.name} ref={register({ required: true })}></input>
          </div>
          <div className={`field-wrapper ${errors?.lastName && 'field-wrapper--error'}`}>
            <label>LastName*</label>
            <input placeholder={user.lastName} name="lastName" defaultValue={user.lastName} ref={register({ required: true })}></input>
          </div>
          <div className={`field-wrapper ${errors?.email && 'field-wrapper--error'}`}>
            <label>E-mail*</label>
            <input placeholder={user.email} name="email" defaultValue={user.email} ref={register({ required: true })}></input>
          </div>
          {user.dod && 
          <div className={`field-wrapper ${errors?.date && 'field-wrapper--error'}`}>
            <label>Birthday</label>
            <input placeholder={user.dod.date} ></input> 
          </div>
            }
        {user.genre && 
          <div className={`field-wrapper ${errors?.genre && 'field-wrapper--error'}`}>
            <label>Genre</label>
            <input placeholder={user.genre} name="genre" defaultValue={user.genre}></input>
          </div>
        }
          {user.favouriteColor && 
          <div className={`field-wrapper ${errors?.favouriteColor && 'field-wrapper--error'}`}>
            <label>Favourite Color</label>
            <input placeholder={user.favouriteColor} name="favouriteColor" defaultValue={user.favouriteColor} ref={register({ required: true })}></input>
          </div>
            }
            {user.about && 
          <div className={`field-wrapper ${errors?.about && 'field-wrapper--error'}`}>
            <label>About You</label>
            <input placeholder={user.about} name="about" defaultValue={user.about} ref={register({ required: true })}></input>
          </div>
            }
            <div className="field-wrapper--button">
                <button className="btn btn--primary btn--w-full" type="submit">Save</button>
            </div>
            <div className="form-errors">{formSubmitError}</div>
        </form>
        }
        </div>
    )
}
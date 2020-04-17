import React, { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'

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
                })
                setFormSubmitError('Password changed!!');
        }else{
            setFormSubmitError('New Password and Confirmed Password are diferents');
        }
    }

    return(
        <div>
            <h1>Passwords</h1>
                {user && 
                <form onSubmit={handleSubmit(onFormSubmit)}>
                     <div className={`field-wrapper ${errors?.password && 'field-wrapper--error'}`}>
                        <label>Current Password*</label>
                        <input placeholder="••••••••••••" name="password" type="password" ref={register({ required: true })}></input>
                    </div>
                    <div className={`field-wrapper ${errors?.newPassword && 'field-wrapper--error'}`}>
                        <label>New Password*</label>
                        <input name="newPassword" type="password" ref={register({ required: true })}></input>
                    </div>
                    <div className={`field-wrapper ${errors?.confirmNewPassword && 'field-wrapper--error'}`}>
                        <label>Confirm New Password*</label>
                        <input name="confirmNewPassword" type="password" ref={register({ required: true })}></input>
                    </div>
                    <div className="field-wrapper--button">
                        <button className="btn btn--primary btn--w-full" type="submit">Save</button>
                    </div>
                    <div className="form-errors">{formSubmitError}</div>
                </form>
                }
        </div>
    )
}
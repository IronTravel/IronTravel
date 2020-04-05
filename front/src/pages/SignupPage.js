import React, { useState } from "react";
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import { withRouter, Redirect } from 'react-router-dom';

//Context
import { useUser } from "../context/user";

//Service
import { signup } from "../service";

export const SignupPage = withRouter(({history}) => {

  const [formSubmitError, setFormSubmitError] = useState('');
  const { handleSubmit, register, errors } = useForm();

  const user = useUser();
  
  const onFormSubmit = (data) => {
    console.log(data)
      signup(data)
        .then(() => history.push('/'))
        .catch(e => setFormSubmitError(e.response.data.status))
  }

    return(
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>email</label>
        <input name="email" id="email" type="text" ref={register({ required: true })}></input>
      </div>
      <div>
        <label>Password</label>
        <input name="password" id="password" type="password" ref={register({ required: true })}></input>
      </div>
      <button type="submit">Create Account</button>
    </form>
    )
})
import React, { useState } from "react";
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import { withRouter, Redirect } from 'react-router-dom';

//Context
import { useUser,useUserSetter } from "../context/user";

//Service
import { login } from "../service";

export const LoginPage = withRouter(({history}) => {
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
  return(
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>email</label>
        <input name="username" id="username" type="text" ref={register({ required: true })}></input>
      </div>
      <div>
        <label>Password</label>
        <input name="password" id="password" type="password" ref={register({ required: true })}></input>
      </div>
      <button type="submit">Create Account</button>
    </form>
  )
})

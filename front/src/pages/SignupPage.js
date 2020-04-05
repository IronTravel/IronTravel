import React, { useState } from "react";

export const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
<form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(email, password);
      }}
    >
      <div>
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={e => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit">Create Account</button>
    </form>
    )
}
import React, { useState, useEffect } from "react";
// const [user, setUser] = useState();


//Service
import { google } from "../service/auth";

export const Google = () => {
    // google()

    return (<a href={`${process.env.API_URL}auth/google/login`}>google</a>)
}


import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import './assets/scss/main.scss';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
});
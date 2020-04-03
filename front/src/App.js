import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Components
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';




export const App = () => {
return (
    <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
            </Switch>
    </Router>
);
};
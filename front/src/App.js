import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Components
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { Google } from "./pages/GoolePage";

// HOCs
import { withAuth } from './components/withAuthHOC';



export const App = withAuth(() => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/signup" exact component={SignupPage} />
                <Route path="/amenities" exact component={AmenitiesPage} />
                <Route path="/google/login" exact component={Google} />
            </Switch>
        </Router>
    )
});
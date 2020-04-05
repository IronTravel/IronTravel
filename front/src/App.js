import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Components
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

// HOCs
import { withAuth } from './components/withAuthHOC';


export const App = withAuth(() => {
return (
    <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
            </Switch>
    </Router>
);
});
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { SettingsPage } from './pages/SettingsPage';
import { Google } from "./pages/GoolePage";

// HOCs
import { withAuth } from './components/withAuthHOC';

export const App = withAuth(() => {
    return (
        <main className="container">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/auth" component={AuthPage} />
                    <Route path="/settings" component={SettingsPage} />
                    <Route path="/google/login" exact component={Google} />
                </Switch>
            </Router>
        </main>
    )
});
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';

import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { PersonalityPage } from './pages/PersonalityPage';
import { MusicHobbiesPage } from './pages/Music-HobbiesPage';
import { Google } from "./pages/GoolePage";

import {ChangePassword} from "./components/Settings/ChangePassword"

// HOCs
import { withAuth } from './components/withAuthHOC';

export const App = withAuth(() => {
    return (
        // <main className="container">
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/auth" exact component={AuthPage} />
                <Route path="/profile" exact component={ProfilePage} />
                <Route path="/settings" exact component={SettingsPage} />
                <Route path="/settings/personality" exact component={PersonalityPage} />
                <Route path="/settings/change-password" exact component={ChangePassword} />
                <Route path="/settings/music-hobbies" exact component={MusicHobbiesPage} />
                <Route path="/google/login" exact component={Google} />
            </Switch>
        </Router>
        // </main>
    )
});
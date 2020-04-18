import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams, Redirect } from 'react-router-dom';

//Components
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { PersonalityPage } from './pages/PersonalityPage';
import { SearchMatchPage } from "./pages/SearchMatchPage";
import { MyTravelsPage } from "./pages/MyTravelsPage";
import { MyToursPage } from './pages/MyToursPage';
import { MusicHobbiesPage } from './pages/Music-HobbiesPage';
import { ChangePassword } from "./components/Settings/ChangePassword";
import { NotFoundPage } from './pages/NotFoundPage';
import { Google } from "./pages/GoolePage";

// HOCs
import { withAuth } from './components/withAuthHOC';

export const App = withAuth(() => {

    const slug = window.location.pathname;

    return (
        <main className={`main-wrapper ${slug === '/auth' ? 'main-wrapper--sm' : 'main-wrapper--lg'}`}>
            <Router>
                <Switch>
                    {/* <Route path="/" exact component={HomePage} /> */}
                    <Route path="/auth" exact component={AuthPage} />
                    <Route path="/profile" exact component={ProfilePage} />
                    <Route path="/search" exact component={SearchMatchPage} />
                    <Route path="/my-travels" exact component={MyTravelsPage} />
                    <Route path="/my-tours" exact component={MyToursPage} />
                    <Route path="/settings" exact component={SettingsPage} />
                    <Route path="/settings/personality" exact component={PersonalityPage} />
                    <Route path="/settings/change-password" exact component={ChangePassword} />
                    <Route path="/settings/music-hobbies" exact component={MusicHobbiesPage} />
                    <Route path="/google/login" exact component={Google} />

                    <Route exact path="/" component={() => (
                        <Redirect to="/auth" />
                    )} />
                    <Route path="/" component={NotFoundPage} />
                </Switch>
            </Router>
        </main>
    )
});
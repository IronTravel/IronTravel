import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Components
// import { HomePage } from './pages/HomePage';
import { Google } from "./pages/GoolePage";
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
import { TravelPage } from './pages/TravelPage';
import { Layout } from './layout/Layout';

// HOCs
import { withAuth } from './components/withAuthHOC';

export const App = withAuth(() => {

    return (
        <Layout>
            <Router>
                <Switch>
                    {/* <Route path="/" exact component={HomePage} /> */}
                    {/* <Route path="/google/login" exact component={Google} /> */}

                    <Route path="/auth" exact component={AuthPage} />
                    <Route path="/profile/:id?" component={ProfilePage} />
                    <Route path="/search" exact component={SearchMatchPage} />
                    <Route path="/my-travels" exact component={MyTravelsPage} />
                    <Route path="/my-tours" exact component={MyToursPage} />

                    <Route path="/settings" exact component={SettingsPage} />
                    <Route path="/settings/personality" exact component={PersonalityPage} />
                    <Route path="/settings/change-password" exact component={ChangePassword} />
                    <Route path="/settings/music-hobbies" exact component={MusicHobbiesPage} />

                    <Route path="/travel/:travel_id?" exact component={TravelPage} />

                    <Route exact path="/" component={() => (
                        <Redirect to="/auth" />
                    )} />
                    <Route path="/" component={NotFoundPage} />
                </Switch>
            </Router>
        </Layout>
    )
});
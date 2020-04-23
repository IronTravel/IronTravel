import React, { useState, useEffect } from 'react';

// Service
import { allUser } from '../service/user';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { UserProfileCard } from '../components/UserProfileCard';
import { allFollowers } from '../service/followers';

export const SearchMatchPage = () => {

    const [users, setUsers] = useState();
    const [followers, setFollowers] = useState();

    useEffect(() => {
        allUser().then(res => setUsers(res.data));
        allFollowers().then(res => setFollowers(res.data));
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />
                <div className="row">
                    {
                        users && users.map((user, i) => (
                            <div key={i} className="col-3">
                                <UserProfileCard user={user} followers={followers} setFollowers={setFollowers} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react';
import _ from 'lodash';

// Service
import { matches } from '../service/user';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { UserProfileCard } from '../components/UserProfileCard';
import { allFollowing, allFollowers } from '../service/followers';

export const SearchMatchPage = () => {

    const [users, setUsers] = useState();
    const [following, setFollowing] = useState();

    useEffect(() => {
        matches().then(res => {
            setUsers(_.orderBy(res.data, ['factorTotal'], ['desc']));
        });
        allFollowing().then(res => setFollowing(res.data));
    }, []);

    console.log("SOY DEL SEARCH MARCTH", following)

    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />
                <div className="row">
                    {
                        users && users.map((user, i) => (
                            <div key={i} className="col-3">
                                <UserProfileCard user={user} following={following} setFollowing={setFollowing}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
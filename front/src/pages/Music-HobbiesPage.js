import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form'

import _ from 'lodash';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';

//Service
import { musicgenres, hobbies ,addAboutMe, aboutMe } from '../service/data'
import { whoami } from '../service/auth'

export const MusicHobbiesPage = () => {

    const [musicGenreList, setMusicGenreList] = useState([])
    const [hobbiesList, setHobbiesList] = useState([])

    const [userAboutMe, setUserAboutMe] = useState([]);

    const fetchUAboutMe = () => aboutMe().then(aboutMe => setUserAboutMe(aboutMe.data));

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        whoami().then((res) => {
            musicgenres().then(res => setMusicGenreList(res.data));
            hobbies().then(res => setHobbiesList(res.data));
            fetchUAboutMe()
        });
        
    }, []);

    const onFormSubmit = async (data) => {
var keys = _.keys(_.pickBy(data));
const hobbies = hobbiesList.map(e => e._id)

let newArrayMusicGenres = []
let newArrayHobbiess = []
await keys.forEach(e => {
    if (hobbies.indexOf(e) !== -1){
        return newArrayMusicGenres.push(e)
    } 
    return newArrayHobbiess.push(e)
})

await addAboutMe(newArrayMusicGenres, "musicgenres");

await addAboutMe(newArrayHobbiess, "hobbies");



console.log(keys)

    }

    return (
        <>
            <Header />
            <div className="container">
                <UserProfileHeader />

                <div className="row">

                    {/* Settings Options Component */}
                    <div className="col-3">
                        <section className="section-box">
                            <div className="section-box__header mb-0">
                                <h2 className="section-box__title px-4">Settings</h2>
                            </div>
                            <div className="section-box__body">
                                <Link to="/settings" className="section-box__link">Personal Information</Link>
                                <Link to="/"className="section-box__link">Account Settings</Link>
                                <Link to="/settings/change-password" className="section-box__link">Change Password</Link>
                                <Link to="/settings/personality"className="section-box__link">Personality and Lifestyle</Link>
                                <Link to="/settings/music-hobbies"className="section-box__link section-box__link--active">Music and Hobbies</Link>
                            </div>
                        </section>
                    </div>

                    {/* Settings Right Side Component */}
                    <div className="col-9 px-4">
                        <section className="section-box">
                            <div className="section-box__header mb-4">
                                <h2 className="section-box__title px-4">Personal Information</h2>
                            </div>
                            <div className="section-box__body px-4 pb-4">
                                <form onSubmit={handleSubmit(onFormSubmit)}>
                                    <div className="row">
                                        <div className="col col-12 mb-4">
                                            <p>Connect with more people according to the way you are. Click on the features that describes you the best. We will match you with other travelers with alike personality types, also, this could help other travelers find you as well.</p>
                                        </div>
                                        <div className="col col-12 mb-4">
                                            <h4 className="content-box__title">Music Genres</h4>
                                            <div className="content-box__pills text-center">
                                            {musicGenreList.length && musicGenreList.map((e, i) => (
                                                <label className="pill-checkbox" key={i}>
                                                    <input  ref={register} name={e._id} type="checkbox"/>
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name={e.name} value={e.name}>{e.name}</span>
                                                </label>
                                            ))}
                                            </div>
                                        </div>
                                        <div className="col col-12 mb-4">
                                            <h4 className="content-box__title">Hobbies</h4>
                                            <div className="content-box__pills text-center">
                                            {hobbiesList.length && hobbiesList.map((e, i) => (
                                                <label className="pill-checkbox" key={i}>
                                                    <input ref={register} name={e._id}type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name={e.name} value={e.name}>{e.name}</span>
                                                </label>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field-wrapper--button">
                                        <button className="btn btn--primary btn--w-full" type="submit">Save</button>
                                    </div>
                                    <div className="form-errors">{formSubmitError}</div>
                                </form>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}
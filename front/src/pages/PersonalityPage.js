import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import _ from 'lodash';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { withProtected } from '../components/withProtectedHOC';

//Service
import { personalities, lifestyles ,addAboutMe, aboutMe } from '../service/data'
import { whoami } from '../service/auth'

const Page = () => {

    const [personalityList, setPersonalityList] = useState([])
    const [lifeStylesList, setLifeStylesList] = useState([])
    const [userPersonaLityList, setUserPersonaLityList] = useState([])
    const [userLifeStyleList, setUserLifeStyleList] = useState([])

    const [formSubmitError, setFormSubmitError] = useState('');
    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        whoami().then((res) => {
            setUserPersonaLityList(res.data.personality.map(e => e._id));
            setUserLifeStyleList(res.data.life_style.map(e => e._id));
            personalities().then(res => setPersonalityList(res.data));
            lifestyles().then(res => setLifeStylesList(res.data));
            //fetchUAboutMe()
        });
    }, []);

    const handleChecked = (hasValue, id, set, list) => {
        if (hasValue) {
            let copy = [...list];
            let newArr = copy.filter(e => e !== id)
            set(newArr);
        } else {
            set([...list, id]);
        }
    }

    const onFormSubmit = async (data) => {
        var keys = _.keys(_.pickBy(data));
        const personalities = personalityList.map(e => e._id)

        let newArrayPersonalities = []
        let newArrayLifeStyles = []

        await keys.forEach(e => {
            if (personalities.indexOf(e) !== -1){
                return newArrayPersonalities.push(e)
            }
            return newArrayLifeStyles.push(e)
        })

        await addAboutMe(newArrayPersonalities, "personalities");
        await addAboutMe(newArrayLifeStyles, "lifestyles")
        toast("Information saved successfully!")
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
                                {/* <Link to="/"className="section-box__link">Account Settings</Link> */}
                                <Link to="/settings/change-password" className="section-box__link">Change Password</Link>
                                <Link to="/settings/personality"className="section-box__link section-box__link--active">Personality and Lifestyle</Link>
                                <Link to="/settings/music-hobbies"className="section-box__link">Music and Hobbies</Link>
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
                                            <h4 className="content-box__title">Personality</h4>
                                            <div className="content-box__pills text-center">
                                                {personalityList.length > 0 && personalityList.map((e, i) => {
                                                    let hasValue = userPersonaLityList.includes(e._id);
                                                    return(
                                                        <label className="pill-checkbox" key={i}>
                                                            <input  ref={register} name={e._id} checked={hasValue} type="checkbox" onChange={() => handleChecked(hasValue, e._id, setUserPersonaLityList, userPersonaLityList)}/>
                                                            <span className="pill-shape pill-shape--secondary pill-shape--lg" name={e.name} value={e.name}>{e.name}</span>
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="col col-12 mb-4">
                                            <h4 className="content-box__title">Lifestyle</h4>
                                            <div className="content-box__pills text-center">
                                            {lifeStylesList.length > 0 && lifeStylesList.map((e, i) => {
                                                let hasValue = userLifeStyleList.includes(e._id);
                                                return(
                                                    <label className="pill-checkbox" key={i}>
                                                        <input ref={register} name={e._id}type="checkbox" checked={hasValue} type="checkbox" onChange={() => handleChecked(hasValue, e._id, setUserLifeStyleList, userLifeStyleList)} />
                                                        <span className="pill-shape pill-shape--primary pill-shape--lg" name={e.name} value={e.name}>{e.name}</span>
                                                    </label>
                                                )
                                            })}
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

export const PersonalityPage = withProtected(Page);

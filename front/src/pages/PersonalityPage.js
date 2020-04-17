import React from 'react';

// Components
import { Header } from '../layout/Header';
import { UserProfileHeader } from '../components/UserProfileHeader';

export const PersonalityPage = () => {
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
                                <a className="section-box__link" href="#">Personal Information</a>
                                <a className="section-box__link" href="#">Account Settings</a>
                                <a className="section-box__link" href="#">Change Password</a>
                                <a className="section-box__link section-box__link--active" href="#">Personality and Lifestyle</a>
                                <a className="section-box__link" href="#">Music and Hobbies</a>
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
                                <form>
                                    <div className="row">
                                        <div className="col col-12 mb-4">
                                            <p>Connect with more people according to the way you are. Click on the features that describes you the best. We will match you with other travelers with alike personality types, also, this could help other travelers find you as well.</p>
                                        </div>
                                        <div className="col col-12 mb-4">
                                            <h4 className="content-box__title">Personality</h4>
                                            <div className="content-box__pills text-center">
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Active" value="Active">Active</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Calm" value="Calm">Calm</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Caring" value="Caring">Caring</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Cheerful" value="Cheerful">Cheerful</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Cooperative" value="Cooperative">Cooperative</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Creative" value="Creative">Creative</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Determined" value="Determined">Determined</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Easy-going" value="Easy-going">Easy-going</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Empathetic" value="Empathetic">Empathetic</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--secondary pill-shape--lg" name="Enthusiastic" value="Enthusiastic">Enthusiastic</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col col-12 mb-4">
                                            <h4 className="content-box__title">Lifestyle</h4>
                                            <div className="content-box__pills text-center">
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Adventurer" value="Adventurer">Adventurer</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Artsy" value="Artsy">Artsy</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Athlete" value="Athlete">Athlete</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Avid reader" value="Avid reader">Avid reader</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Chef" value="Chef">Chef</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Movie lover" value="Movie lover">Movie lover</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Culture enthusiast" value="Culture enthusiast">Culture enthusiast</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Dancer" value="Dancer">Dancer</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Early bird" value="Early bird">Early bird</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Entrepreneur" value="Entrepreneur">Entrepreneur</span>
                                                </label>
                                                <label className="pill-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="pill-shape pill-shape--primary pill-shape--lg" name="Family person" value="Family person">Family person</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field-wrapper--button">
                                        <button className="btn btn--primary btn--w-full" type="submit">Save</button>
                                    </div>
                                    <div className="form-errors"></div>
                                </form>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}
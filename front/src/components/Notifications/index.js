import React, { useState } from 'react';
import { UserCard } from '../UserCard';

export const Notifications = ({ icon }) => {

    const [visible, setVisible] = useState(false);

    return (
        <aside className="notifications position-relative">
            <span onClick={() => setVisible(!visible)}>
                <span className="notifications-qty">12</span>
                <span className="notifications-icon">{icon}</span>
            </span>
            <section className={`dropdown-panel ${visible && 'dropdown-panel--visible'}`}>
                <header className="dropdown-panel__header">
                    <h2 className="dropdown-panel__header__title">Notifications</h2>
                </header>
                <div className="dropdown-panel__body">
                    <ul className="notifications-wrapper">
                        <li className="notification notification--new">
                            <UserCard
                                avatar=""
                                avatarSize={35}
                                name="John Smith"
                                time="Sent you a request to connect!"
                            />
                            <time dateTime="2008-02-14 20:00">5 min ago</time>
                        </li>
                        <li className="notification">
                            <UserCard
                                avatar=""
                                avatarSize={35}
                                name="John Smith"
                                time="Sent you a request to connect!"
                            />
                            <time dateTime="2008-02-14 20:00">5 min ago</time>
                        </li>
                        <li className="notification">
                            <UserCard
                                avatar=""
                                avatarSize={35}
                                name="John Smith"
                                time="Sent you a request to connect!"
                            />
                            <time dateTime="2008-02-14 20:00">5 min ago</time>
                        </li>
                        <li className="notification">
                            <UserCard
                                avatar=""
                                avatarSize={35}
                                name="John Smith"
                                time="Sent you a request to connect!"
                            />
                            <time dateTime="2008-02-14 20:00">5 min ago</time>
                        </li>
                        <li className="notification">
                            <UserCard
                                avatar=""
                                avatarSize={35}
                                name="John Smith"
                                time="Sent you a request to connect!"
                            />
                            <time dateTime="2008-02-14 20:00">5 min ago</time>
                        </li>
                    </ul>
                </div>
                <footer className="dropdown-panel__footer">
                    <button>Mark all as read</button>
                </footer>
            </section >
        </aside >
    )
}
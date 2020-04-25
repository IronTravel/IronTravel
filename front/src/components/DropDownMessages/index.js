import React, { useState } from 'react';
import moment from 'moment';

import { UserCard } from '../UserCard';
import { useUser } from '../../context/user';

export const DropDownMessages = ({ icon, quantity }) => {

    const user = useUser();

    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const handleClearNotification = async (id) => {
        const notifications = await clearNotifcations(id);
        setNotifications(notifications);
    }

    useEffect(() => {
        setNotifications(user.notifications);
    }, [])

    return (
        <aside className="notifications position-relative">
            <span onClick={() => setVisible(!visible)}>
                {!!quantity && <span className="notifications-qty">{quantity}</span>}
                <span className="notifications-icon">{icon}</span>
            </span>
            {
                visible &&
                <section className="dropdown-panel">
                    <header className="dropdown-panel__header">
                        <h2 className="dropdown-panel__header__title">Notifications</h2>
                    </header>
                    <div className="dropdown-panel__body">
                        <ul className="notifications-wrapper">
                            {
                                notifications.map((notification, i) => (
                                    <li key={i} className="notification notification--new" onClick={() => handleClearNotification(notification._id)}>
                                        <UserCard
                                            avatar=""
                                            avatarSize={35}
                                            name="John Smith"
                                            time="Sent you a request to connect!"
                                        />
                                        <time dateTime={notification.date}>{moment(notification.date).fromNow()}</time>
                                    </li>
                                ))
                            }

                            {/* <li className="notification">
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
                            </li> */}
                        </ul>
                    </div>
                    {/* <footer className="dropdown-panel__footer">
                        <button>Mark all as read</button>
                    </footer> */}
                </section>
            }
        </aside>
    )
}
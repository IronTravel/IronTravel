import React, { useState } from 'react';

// Components
import iconLogin from '../../assets/svgs/icon-login.svg';
import iconRegister from '../../assets/svgs/icon-register.svg';

export const AuthTabs = ({ children }) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const handleChangeTab = (i) => setSelectedTab(i);
    const getCurrentTabClassName = (i) => selectedTab === i ? 'auth-tabs__buttons__btn--active' : '';

    return (
        <div className="auth-tabs">
            <div className="auth-tabs__buttons">
                {
                    children.map((el, i) => (
                        <button
                            key={i}
                            onClick={() => handleChangeTab(i)}
                            className={`auth-tabs__buttons__btn ${getCurrentTabClassName(i)}`}
                        >
                            <img src={i ? iconRegister : iconLogin} />
                        </button>
                    ))
                }
            </div>
            <div className="auth-tabs__body">
                {
                    children[selectedTab]
                }
            </div>
        </div>
    )
}
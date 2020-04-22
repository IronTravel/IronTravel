import React, { useState } from 'react';

export const DropDownMenu = ({ icon, children }) => {

    const [visible, setVisible] = useState(false);

    return (
        <aside className="dropdownmenu">
            <button className="dropdownmenu__btn" onClick={() => setVisible(!visible)}>
                {icon}
            </button>
            {visible && <section className="dropdownmenu__options">
                {children}
            </section>}
        </aside>
    )
}
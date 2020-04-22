import React, { useState } from 'react';

export const DropDownMenu = ({ icon, children }) => {

    const [visible, setVisible] = useState(false);

    return (
        <aside className="dropdownmenu" onMouseLeave={() => setVisible(false)}>
            <button className="dropdownmenu__btn" onMouseEnter={() => setVisible(true)}>
                {icon}
            </button>
            {visible && <section className="dropdownmenu__options">
                {children}
            </section>}
        </aside>
    )
}
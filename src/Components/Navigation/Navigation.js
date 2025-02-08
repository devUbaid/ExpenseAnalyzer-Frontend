import React, { useState } from 'react';
import './Navigation.css';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/Icons';
import LogOut from './../LogOut/LogOut';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            {/* Toggle Button for Small Screens */}
            <button
                onClick={() => setShowNav(!showNav)}
                className="toggle-btn"
            >
                ☰
            </button>

            {/* Navigation Bar */}
            <nav className={`navigation ${showNav ? 'show' : ''}`}>
                <div className="user-con">
                    <img src={avatar} alt="User Avatar" />
                    <div className="text">
                        <h2>Mohd Ubaid</h2>
                        <p>Admin</p>
                    </div>
                </div>
                <ul className="menu-items">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => {
                                setActive(item.id);
                                setShowNav(false); // Close menu on selection
                            }}
                            className={active === item.id ? 'active' : ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
                <div className="bottom-nav">
                    <li>{signout} <LogOut /></li>
                </div>
            </nav>
        </>
    );
}

export default Navigation;

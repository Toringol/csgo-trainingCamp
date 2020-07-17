import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavbarHome = () => (
    <header className="header-home">
        <nav className="navbar-home">
            <ul className="nav__links">
                <li>
                    <NavLink exact={true} className="nav__link" activeClassName='is-active' to="/">
                        UPDATES
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" activeClassName='is-active' to="/blog">
                        BLOG
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
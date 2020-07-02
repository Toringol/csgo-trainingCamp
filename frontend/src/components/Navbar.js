import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <header className="header">
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"></img>
        <nav className="navbar">
            <ul className="nav__links">
                <li>
                    <NavLink className="nav__link" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to="/training">
                        Training
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to="/register">
                        Register / Log In
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
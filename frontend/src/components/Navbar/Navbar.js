import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => (
    <header className="header">
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"></img>
        <nav className="navbar">
            <ul className="nav__links">
                <li>
                    <NavLink exact={true} className="nav__link" to="/">
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
                { 
                props.isAuth ? 
                    <li>
                        <img className="avatar" src={props.avatar} alt="avatar" />
                        {props.username}
                        <img className="arrow" src={process.env.PUBLIC_URL + '/arrow.png'} alt="arrow" />
                    </li>
                :
                    <li>
                        <NavLink className="nav__link" to="/signup">
                            Sign Up / Sign In
                        </NavLink>
                    </li>
                }
            </ul>
        </nav>
    </header>
)

export default Navbar;
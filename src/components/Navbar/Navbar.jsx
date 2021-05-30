import React from "react";
import navbarCSS from '../Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={navbarCSS.nav}>
            <div className={navbarCSS.navButton}>
                <div>
                    <NavLink to='/profile' activeClassName={navbarCSS.active}> Profile </NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={navbarCSS.active}> Message </NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={navbarCSS.active}> News </NavLink>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={navbarCSS.active}> Music </NavLink>
                </div>
                <div>
                    <NavLink to='/settings' activeClassName={navbarCSS.active}> Settings </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
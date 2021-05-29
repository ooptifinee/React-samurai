import React from "react";
import navbarCSS from '../Navbar.module.css';

const  Navbar = () => {
    return (
        <nav className={navbarCSS.nav}>
            <div>
                <a className={navbarCSS.link}> Profile </a>
            </div>
            <div>
                <a className={navbarCSS.link}> Message </a>
            </div>
            <div>
                <a className={navbarCSS.link}> News </a>
            </div>
            <div>
                <a className={navbarCSS.link}> Music </a>
            </div>
            <div>
                <a className={navbarCSS.link}> Settings </a>
            </div>
        </nav>
    )
}

export default Navbar;
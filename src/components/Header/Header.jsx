import React from 'react';
import HeaderCSS from './Header.module.css';

const Header = () => {
    return (
        <header className={HeaderCSS.header}>
            <img src='../svg/RPC-JP_Logo.png' alt='png'/>
            {/*<div>*/}
            {/*    <a className={HeaderCSS.fontt}> Home -</a>*/}
            {/*    <a className={HeaderCSS.fontt}> News -</a>*/}
            {/*    <a className={HeaderCSS.fontt}> Feed -</a>*/}
            {/*    <a className={HeaderCSS.fontt}> Message</a>*/}
            {/*</div>*/}
        </header>
    )
}

export default Header;
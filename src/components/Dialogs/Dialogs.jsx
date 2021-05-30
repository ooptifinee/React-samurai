import React from "react";
import Style from './Dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <BrowserRouter>
            <div className={Style.chats}>
                <div className={Style.Dialogs}>
                    <div><NavLink to="/dialogs/1"> user 1</NavLink></div>
                    <div><NavLink to="/dialogs/2"> user 2</NavLink></div>
                    <div><NavLink to="/dialogs/3"> user 3</NavLink></div>
                    <div><NavLink to="/dialogs/4"> user 4</NavLink></div>
                </div>
                <div className={Style.Messages}>
                    <div>hi</div>
                    <div>how are your</div>
                    <div>Goodbye</div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs;
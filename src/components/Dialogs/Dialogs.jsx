import React from "react";
import style from './Dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialogs + " " + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'user2'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'}
    ]

    return (
            <div className={style.chats}>
                <div className={style.dialogs}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                </div>
                <div className={style.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                </div>
            </div>

    )
}

export default Dialogs;
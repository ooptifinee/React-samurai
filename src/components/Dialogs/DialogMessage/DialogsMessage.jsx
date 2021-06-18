import React from "react";
import style from '../Dialogs.module.css'


const DialogsMessage = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}

export default DialogsMessage;
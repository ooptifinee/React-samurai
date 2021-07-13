import React from "react";
import style from './Dialogs.module.css'
import DialogMessage from './DialogMessage/DialogsMessage'
import DialogItem from './DialogItem/DialogsItem'

const Dialogs = (props) => {
    let dialogsElements = props.chatDialData.map((d => <DialogItem name={d.name} id={d.id}/>))
    let messageElements = props.chatMesData.map((m => <DialogMessage message={m.message}/>))

    return (
        <div className={style.chats}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <textarea> </textarea>
                {/*{messageElements}*/}
            </div>
        </div>
    )
}

export default Dialogs;
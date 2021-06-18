import React from "react";
import style from './Dialogs.module.css'
import DialogMessage from './DialogMessage/DialogsMessage'
import DialogItem from './DialogItem/DialogsItem'

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'},
        {id: 4, name: 'user4'}
    ]

    let dialogsElements = dialogsData.map((d => <DialogItem name={d.name} id={d.id}/>))

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'}
    ]

    let messageElements = messagesData.map(( m => <DialogMessage message={m.message}/>))

    return (
            <div className={style.chats}>
                <div className={style.dialogs}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messageElements}
                </div>
            </div>

    )
}

export default Dialogs;
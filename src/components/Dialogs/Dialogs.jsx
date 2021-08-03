import React from "react";
import style from "./Dialogs.module.css";
import DialogMessage from "./DialogMessage/DialogsMessage";
import DialogItem from "./DialogItem/DialogsItem";
import store, {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogPage
    let dialogsElements = state.dialogsData.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ));
    let messageElements = state.messagesData.map((m) => (
        <DialogMessage message={m.message} />
    ));
    let onSendMessageClick = () => {

        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    let newMessageBody = state.newMessageBody;
    return (
        <div className={style.chats}>
            <div className={style.dialogs}>{dialogsElements}</div>
            <div className={style.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea placeholder='Enter your message'
                                   value={newMessageBody}
                                   onChange={onNewMessageChange}> </textarea></div>
                    <div><button onClick={onSendMessageClick}>Button</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

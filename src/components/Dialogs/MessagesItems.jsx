import React from "react";
import s from './Dialogs.module.css';

const MessagesItems = (props) => {
    return(
        <div className = {s.mesitem}>
                {props.massage}
        </div>
    )
}
export default MessagesItems;
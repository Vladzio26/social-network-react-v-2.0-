import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems";
import MessagesItems from "./MessagesItems";

const Dialogs = (props) =>{  

    const dialogElement = props.dataDialogs.map( d => <DialogItems name={d.name} id={d.id} />)
    const messageElement = props.dataMessages.map( m => <MessagesItems massage = {m.message}/>)
        
        let textMessage = React.createRef();
        
        let addMessages = () => {
           
            //let text = textMessage.current.value;
            textMessage.current.value = '';
            props.addMessages( )

        };

        //debugger
        let onMessageChange = (e) => {
            var body = e.target.value;
           
            props.onMessageChange(body);
           
        }
        
    
    return(
        <div className={s.dialogs}>
            <div className = {s.dialogItems}>
                <h4>Dialogs</h4>

                 {dialogElement }

            </div>

                <hr className={s.line}/> 

            <div className = {s.messagesItems}>
                <div className={s.chat}>   
                    { messageElement }
                </div>
            </div>

            <div>
                <textarea className={s.textarea} ref={ textMessage} onChange={ onMessageChange } placeholder = "Write your message!"></textarea>
                <button className={s.send}  onClick={addMessages}>Send</button>
            </div>

        </div>
    )
}/*
const Dialogs = (props) =>{
    return(
        <div>
        </div>
    )
}*/
export default Dialogs;
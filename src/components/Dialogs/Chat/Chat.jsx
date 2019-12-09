import React from "react";
import s from "./Chat.module.css";
import Sidebar from "./components/Sidebar";
import MessagesList from "./components/MessagesList";
import AddMessage  from "./components/AddMessage" ;


const Chat = () =>{
    return(
        <div className={s.container}>
            <Sidebar/>
            <section className={s.main}>    
                <MessagesList />
                <AddMessage /> 
            </section>
        </div>
    )
}
export default Chat;
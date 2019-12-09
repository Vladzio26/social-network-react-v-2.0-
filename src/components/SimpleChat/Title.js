import React from "react";
import s from "./Chat.module.css";



const Title = (props) => {
    return(
        <div>
            <div className = {s.title}>
            <h3>👑Social chat👑</h3>
            <h4 className={s.currentUser}>Ви увійшли як:{props.login}</h4>
            </div>
        </div>
    )
}
export default Title;

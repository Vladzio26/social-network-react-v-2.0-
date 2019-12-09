import React from "react";
import s from "./FormsControls.module.css";

export const Textarea = ({input,meta,...props}) =>{

    const hasError = meta.touched && meta.error;
    return(
        <div className={s.formcontrol + " " +(hasError ? s.error: '')}>
            <textarea placeholder="Add new post..." className={s.postInput} {...input} {...props} />
           { hasError && <span>{meta.error}</span>}
        </div>
    )

}


export const Input = ({input,meta,...props}) =>{

    const hasError = meta.touched && meta.error;
    return(
        <div className={s.formcontrol + " " +(hasError ? s.error: '')}>
            <input  {...input} {...props} />
        
           { hasError && <span>{meta.error}</span>}
        
        </div>
    )

}
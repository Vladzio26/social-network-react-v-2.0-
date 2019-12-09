import React from 'react';
import s from './Friend.module.css';



const Friend = (props) =>{
    return(     <ul>
                <li> <img className={s.friendItem} src={props.src}/></li>
                <li> { props.name } </li>
                </ul>
    )
}
export default Friend;
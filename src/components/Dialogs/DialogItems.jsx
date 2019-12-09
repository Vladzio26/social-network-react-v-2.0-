import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItems = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <div className={s.diaitem}>
            <img src="http://sun9-40.userapi.com/c849220/v849220851/b932e/JjFgskZMWsw.jpg?ava=1" className={s.gachi}/>
            <NavLink to={path} className={s.dialog}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItems;
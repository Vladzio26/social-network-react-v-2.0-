import React from "react";
import PropTypes from 'prop-types';
import s from './../Chat.module.css';

const Sidebar = ({users}) => (
    <aside className={s.sidebar}>
        <ul>
            {users.map(user =>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>

)

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
export default Sidebar
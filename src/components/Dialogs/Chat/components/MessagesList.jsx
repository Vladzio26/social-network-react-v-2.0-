import React from 'react';
import propTypes from 'prop-types';
import Message from './Message';
import s from './../Chat.module.css';


debugger
const MessagesList = ({messages}) => (

    <section className={s.messages_list}>
        <ul>
            {messages.map(message => (
                <Message
                key={message.id}
                {...message}
                />
            ))}
        </ul>
    </section>
)


MessagesList.propTypes = {
    messages: propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.number.isRequired,
            message:propTypes.string.isRequired,
            author: propTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
export default MessagesList
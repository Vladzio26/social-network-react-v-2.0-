import {connect} from 'react-redux';
import MessagesListComponent from '../components/MessagesList';
import {updateNewTextMessageAC, addNewMessageAC} from "./../../redux/dialogs-reducer";

export const MessagesList = connect(state =>({
    
    message: state.MessagesList
}), {})(MessagesListComponent)
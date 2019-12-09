import * as types from '../components/Dialogs/Chat/actions/ActionTypes';


let nextMessageId = 0;
const nextUserId = 0;

const messages = (state =[], action) =>{
    switch(action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id:action.id
                }
            ])
            default:
                return state
    }
}



export default messages;
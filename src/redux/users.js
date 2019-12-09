import * as types from '../components/Dialogs/Chat/actions/ActionTypes';


let nextUserId = 0;
const users = (state = [], action ) =>{
    switch (action.type) {
        case types.ADD_USER:
            return state.concat([
                {name: action.name, id:action.id}
            ])
        case types.USERS_LIST:
            return action.user
            default:
                return state
    }
}



export default users;
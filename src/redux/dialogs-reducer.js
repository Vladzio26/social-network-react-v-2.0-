let ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT";
let UPDATE_NEW_TEXT_MESSAGE = "UPDATE_NEW_TEXT_MESSAGE";

let initialState = {
    dataMessages: [
        {id:1, messagye:"Hi"},
        {id:2, message:"Hello"},
        {id:3, message:"Lul"},
        {id:4, message:"Lol"},
        {id:5, message:"Yeah"},
        {id:6, message:"Too"},
        {id:7, message:"fck that"}
      ],                
    dataDialogs: [
        {id:1, name:"Vasya"},
        {id:2, name:"Illya"},
        {id:3, name:"Volodya"},
        {id:4, name:"Alex"},
        {id:5, name:"Sandur"},
        {id:6, name:"Oleg"}
      ],
    updateNewMessage: 'Hello!'

};

const dialogsReducer = ( state = initialState, action ) => {

  let stateCopy = { ...state,
                    dataMessages: [...state.dataMessages]                
  };
  
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            let body = state.updateNewMessage;
            stateCopy.updateNewMessage = ' '; 
            stateCopy.dataMessages.push({id:6, message:body});
            
            return stateCopy;
        case UPDATE_NEW_TEXT_MESSAGE: {
          
          stateCopy.updateNewMessage = action.body;
          return stateCopy;
        }
    }
  return state;
}




export const addNewMessageAC = () =>({type:ADD_NEW_MESSAGE_TEXT})
export const updateNewTextMessageAC = (body) =>({type:UPDATE_NEW_TEXT_MESSAGE, body: body})

export default dialogsReducer;
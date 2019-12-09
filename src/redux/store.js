let UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";
let ADD_POST_MAKER = "ADD_POST_MAKER";
let SET_USERS_PROFILE = "SET_USERS_PROFILE"
let RECEIVE_MESSAGE= "RECEIVE_MESSAGE";

const initialState =  {
 general:[ 
  {from: 'vlad', msg:'hello'},
  {from: 'vlad', msg:'hello'}, 
  {from: 'vlad', msg:'hello'}
  ],
  topic:[
    {from: '555', msg:'hello'},
    {from: '5dfdf', msg:'hello'}
  ]
 }



//}

const chatReducer = ( state = initialState, action) => {
  
    switch(action.type) {
        case RECEIVE_MESSAGE: {
          return {
            ...state,
        
          }
          }
         
        }
      
    }








export default chatReducer;
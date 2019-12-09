import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";




let store_cust = {
  _state: {
    profilePage: {
        persData: [
            {name: 'Vasya', age:10, phone:'+380997657485' }
          ],
        dataPost: [
            {message:'Hello it`s me', like: 100},
            {message:'What a miss(', like: 156},
            {message:'Great chance', like: 333}
          ],
        updateNewPost: 'it-kamasutra'

    },
    dialogsPage: {
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

    },
    navBar: {
      friend: [
        {name: "Vasya", src:"http://geekcity.ru/wp-content/uploads/Geek-Art-Wes-Mongomery-Iron-Man-Mustache.jpg"},
        {name: "Mykola", src:"http://geekcity.ru/wp-content/uploads/Geek-Art-Wes-Mongomery-Spider-Man-Mustache.jpg"},
        {name: "Sasha", src:"http://geekcity.ru/wp-content/uploads/Geek-Art-Wes-Mongomery-Batman-Mustache.jpg"}
      ]
    }
  },
  getState(){
    return this._state;
  },
  _callSubscriber(){
    console.log('state changed');
  },
  subscribe (observer) {
    this._callSubscriber = observer; 
  },

  dispatch(action) {
     
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
}}




window.store = store_cust;
export default store_cust;
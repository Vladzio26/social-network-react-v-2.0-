import React from 'react';
import { TextField, Input, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import s from "./Chat.module.css";
import firebase from "firebase";
import {makeStyles} from '@material-ui/core/styles';
import Title from './Title';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import Firebase from './Firebase';
import {Redirect} from 'react-router-dom';  



class Chat extends React.Component {
   

    constructor(props){
        super(props)
        this.state = {
            text:"",
            messages: [],
            login:[this.props.login],
            users:[]

            }
    }


    componentDidMount(){
     /*   var config = {
            apiKey: "AIzaSyAnClSLoQLouw7qs5uOJS8YcxY1EClhLi8",
            authDomain: "chat-for-react.firebaseapp.com",
            databaseURL: "https://chat-for-react.firebaseio.com",
            projectId: "chat-for-react",
            storageBucket: "chat-for-react.appspot.com",
            messagingSenderId: "806936981186",
            appId: "1:806936981186:web:d2ddde8d04f08cfb0bd55b",
            measurementId: "G-5MBZ2LVV2N"
          };*/
          //firebase.initializeApp(config);
          this.getMessages();
    }firebase
 
onSubmit =  event =>{
    if(event.charCode === 13 && this.state.text.trim() !==""){
    this.writeMessageToDB(this.state.text, this.props.login)
    this.setState({text: ""})
    }
}


writeMessageToDB = (message, login) =>{
    Firebase
    .database()
    .ref("messages/")
    .push({
        text:message,
        user:login
    })
}
 getMessages = () =>{
 
    let messagesDB = Firebase
    .database()
    .ref("messages/")
    .limitToLast(500)
    messagesDB.on("value", snapshot =>{
        let newMessages = []
        let newUser = []
        snapshot.forEach(child =>{
            var message=child.val()
            var login=child.val()
            newMessages.push({id: child.key, text:message.text, user:login.user })
           // newUser.push({id: child.key, user:login.user })
           console.log(newMessages)
        })
        this.setState({messages: newMessages, })
       // this.setState({users: newUser, })
        this.bottomSpan.scrollIntoView({ behavior:"smooth"})
    })
}

renderMessages = () =>{
 return this.state.messages.map((message)=>(
     <ListItem>
         <div className={s.borderMessage}>
         
  <div className={s.user}>{message.user}</div><div className={s.message}>{message.text}</div>
       </div>
    </ListItem>
 ))
}
renderUser = () =>{
    return this.state.users.map((user)=>(
        
            <ListItemText style={{wordBreak:"break-word"}} primary={user.user}  ></ListItemText>
      
    ))
   }


   addEmoji = (e) => {
    //console.log(e.native)
    let emoji = e.native;
    this.setState({
      text: this.state.text + emoji
    })
  }




render(){
    if (this.props.isAuthoris == false) return <Redirect to ={"/login"} />
        return(
            <div className={s.app}>
                <Title { ...this.props}/>
                <div className={s.wrapper}>
              
                <List>
                <ListItem>
                <ListItemText><h3>{this.renderUser()}</h3><div>{this.renderMessages()}</div></ListItemText> 
                    </ListItem>
                </List>
                
           
                
            <span ref={el=> (this.bottomSpan = el)} ></span>
            </div>
           
            <input  placeholder="Напечатай щоб відправити..."
             onChange={event => this.setState({text:event.target.value})}
                value={this.state.text}
                onKeyPress={this.onSubmit}
                className={s.inputMessage}></input>

            <div className={s.emoji}>
            <Picker onSelect={this.addEmoji} />
            </div>
            </div>
        )
    }
}
export default Chat;
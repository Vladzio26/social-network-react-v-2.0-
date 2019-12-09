import React from 'react';
import s from './Profile.module.css';
import Post from './Post/Post';
import Personality from './Personality/Personality';
import PersonalityContainer from './Personality/PersonalityContainer';
//import ProfileContainer from "./ProfileContainer";
//import { addPostAC, updateNewTextPostAC } from '../../redux/profile-reducer';
import {Redirect} from 'react-router-dom';  
import {reduxForm, Field} from "redux-form";
import {required, maxLengthCreator} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls"

 const maxLength10 =  maxLengthCreator(50);

const Profile = (props) => {

    const postElement = props.dataPost.map( p => <Post message= {p.message} like={p.like} updateNewPost={p.updateNewPost}  />)
    const personElement = props.persData.map(per => <PersonalityContainer updateStatus={per.updateStatus} status={per.status} profile={per.profile}  name = {per.name} age ={per.age} phone ={per.phone}/> )
  
    let newPostElement = React.createRef();
    
    let addPost = (values) => {
        props.addPost(values.newPostText);
       
    }

    if (props.isAuthoris == false) return <Redirect to ={"/login"} />
   
    return (
      
    <div className={s.content}>
        <img src="https://flickrtheblog.files.wordpress.com/2017/11/10285894466_b72616f2c1_b.jpg?w=1024&h=423&crop=1" />
        {personElement}
        <AddNewPostForm onSubmit={addPost}/>
        <div>
          {postElement}
        </div>
      </div>
    )
  }
  let AddNewPostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
          <div className ={s.post_maker}>
          <h2>My posts</h2>
          <Field name = "newPostText" component={Textarea} validate={[required, maxLength10]}/>
          <button className={s.button} >Put</button>
          </div>
    </form>
  } 
  AddNewPostForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);
export default Profile;
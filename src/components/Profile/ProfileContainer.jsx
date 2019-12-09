import React from 'react';
import s from './Profile.module.css';
import Post from './Post/Post';
import Personality from './Personality/Personality';
import Profile from "./Profile";
//import {addPost} from "./Profile"
import {connect} from "react-redux"
import redux from "redux";
import {Redirect} from 'react-router-dom';  
import { withRouter } from 'react-router-dom';

import {  addPostAC,getStatus,updateStatus } from '../../redux/profile-reducer';
import { AuthRedirect } from '../../hoc/AuthRedirect';


class ProfileContainer extends React.Component{
  render(){
    return(
      <Profile {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      />
    )
  }

}
  
const mapStateToProps = (state) => {

  return{
    status:state.profilePage.status,
    
    isAuthoris: state.auth.isAuthoris,
    persData: state.profilePage.persData,
    dataPost: state.profilePage.dataPost,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return{
    addPost: (newPostText)=>{
      dispatch(addPostAC(newPostText));
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps /*{addPostAC,getStatus,updateStatus, updateNewTextPostAC}*/)(ProfileContainer);
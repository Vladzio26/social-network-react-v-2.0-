import React from 'react';
import s from './Personality.module.css';
import Personality from "./Personality";
import {connect} from 'react-redux';
import axios from "axios";
import {getUserProfile, updateStatus, getStatus, toggleIsFatchingAC} from "./../../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';  
import { profileAPI, userAPI } from "../../../api/api";


class PersonalityContainer extends React.Component {
  
  componentDidMount () {
    debugger
let userId = this.props.match.params.userId;

if(!userId){
  
  userId = this.props.authrizedUserId;

  if(!userId){
    this.props.history.push("/login");
  }

}
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    
 
  }
  render(){
    return(
      <Personality updateStatus={this.props.updateStatus} status={this.props.status} {... this.props} profile= {this.props.profile}/>
      )
  }
}



 let AuthRedirectComponent = (props) =>{
if (props.isAuthoris == false) return <Redirect to ={"/login"} />
return <PersonalityContainer {...props} />
}

 let mapStateToProps = (state) =>({
      profile: state.profilePage.profile,
      isFatching: state.usersPage.isFatching,
      status:state.profilePage.status,
      authrizedUserId: state.auth.userId
 })

 let UrlDataComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{getStatus,updateStatus, getUserProfile, toggleIsFatchingAC})(UrlDataComponent)
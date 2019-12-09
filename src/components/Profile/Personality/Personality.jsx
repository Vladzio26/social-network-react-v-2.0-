import React from 'react';
import s from './Personality.module.css';
import preloader from './../../../assets/820.png'; 
import userPhoto from "./../../../assets/user.png";
import ProfileStatus from "./ProfileStatus";
import {Redirect} from 'react-router-dom';  

const Personality = (props) => {

if(!props.profile){
  
    return <div >{props.isFatching ? 
      <div >
       <img  className={s.preloader} src={preloader} />
      </div> 
       : null  
  }</div>
  }
    return(



      
    <div className = {s.avatar}>
    
          <img src={props.profile.photos.large != null ? props.profile.photos.large: userPhoto} />
          <ul className={s.profile}>
            <li><span className={s.spanStatus}>Status:</span><ProfileStatus className={s.status} updateStatus={props.updateStatus} status={props.status}/></li>
            <li><span>Full name: </span>{props.profile.fullName}</li>
            <li><span>About me: </span>{props.profile.aboutMe}</li>
            <li><span>Instagram: </span>{props.profile.contacts.instagram}</li>
          </ul>
    </div>
    )}
    
export default Personality;
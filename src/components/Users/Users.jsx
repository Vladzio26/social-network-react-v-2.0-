import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "./../../assets/user.png";
import preloader from './../../assets/820.png'; 
import { NavLink } from 'react-router-dom';
import Header from "../Header/Header";
import {userAPI} from "../../api/api";
import Preloader from "../common/Preloader";


class Users extends React.Component{
     
     /*
    componentDidMount() {
       /* this.props.getUsersThunkCreator();  
        this.props.toggleIsFatching(true);
        userAPI.getUser(this.props.currentPage, this.props.pageSize)
        .then(data =>{
            this.props.toggleIsFatching(false);
            this.props.setUsers(data.items);
             this.props.setTotalUsersCount(data.totalCount);   
             
        });

    }
    */


    /*onPageChange =(pageNumber) => {
       
        this.props.toggleIsFatching(true);
        this.props.setCurrentPage (pageNumber);
        userAPI.getUser(pageNumber, this.props.pageSize)
        .then(data=>{
            this.props.toggleIsFatching(false);
            this.props.setUsers(data.items);
            
        })

    }*/

    render () {
        
        let pageCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize)/8;

        let pages = [];
        for(let i =1; i<=pageCount; i++){
            pages.push(i);
        }
       
        


        return <div>
            
            {this.props.isFatching ? 
            <div >
             <img src={preloader} />
            </div> 
             : null  
        }
     
        <div className={s.paginator}>
            <p></p>
            {pages.map(p => {
                return <span className={this.props.currentPage === p && s.selectedPage || s.page}
                onClick ={(e) => {this.props.onPageChange(p); }}>{p}</span>
            })}
            <p></p>
        </div>
        <hr/>
        
        {
               
        this.props.users.map( u => <div key={u.id}>
        
        <div className = {s.follow}>
            
        
            <NavLink to={'/profile/' +u.id}>
            <img className={s.userPhoto} src = { u.photos.small != null ? u.photos.small : userPhoto } />
            </NavLink>


            {u.followed ?
           



            <button disabled={this.props.followingInProgress} onClick = {()=>{  
                this.props.toggleFollowingProgress(true, u.id);
                axios.delete (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}` ,{withCredentials:true, headers:{"API-KEY": "2d76971f-6f6e-4bb5-959d-005a0b0acbb7"}})
                .then(response =>{
                if(response.data.resultCode == 0){
                    this.props.unfollow(u.id);
                }
                this.props.toggleFollowingProgress(false, u.id);

                });}}>Unfollow</button>:



                <button disabled={this.props.followingInProgress} onClick = {()=>{ 
                    
                    this.props.toggleFollowingProgress(true, u.id);

                    axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true, headers:{"API-KEY": "2d76971f-6f6e-4bb5-959d-005a0b0acbb7"}})
                    .then(response =>{
                        if(response.data.resultCode == 0){
                            this.props.follow(u.id);
                        }
                        this.props.toggleFollowingProgress(false, u.id);

                        });
                          
                          
                          
                        }}>  Follow</button>
            }
            </div>
        <div className = {s.wrapper}>
            <div>
                <div className = {s.leftSide}>
                    {u.name}<br/>
                    {u.id}<br/>
                    {u.title}
                </div>
                <p></p>
                <div className = {s.rightSide}>
                    {/*u.location.country*/}
                    <br/>
        {/*u.location.city*/}
                </div>
            </div>
            
        </div>
        </div>)
        
       
    }<p></p></div>
    }
}
export default Users;
import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollowingProgress, getUsers, follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFatching } from "../../redux/users-reducer";
import {userAPI} from "../../api/api";

import axios from "axios";


class UsersContainer extends React.Component{
    
    componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize);  
         /*this.props.toggleIsFatching(true);
         userAPI.getUser(this.props.currentPage, this.props.pageSize)
         .then(data =>{
             this.props.toggleIsFatching(false);
             this.props.setUsers(data.items);
              this.props.setTotalUsersCount(data.totalCount);   
              
         });*/
 
     }
    onPageChange =(pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);  
/*
        this.props.toggleIsFatching(true);
        this.props.setCurrentPage (pageNumber);
        userAPI.getUser(pageNumber, this.props.pageSize)
        .then(data=>{
            this.props.toggleIsFatching(false);
            this.props.setUsers(data.items);
            
        })
*/
    }
    render(){
        return <>
            <Users 
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChange = {this.onPageChange}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                isFatching = {this.props.isFatching}
                toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}



let mapStateToProps = (state) => {
    
    return {
        login: state.auth.login,
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching,
        toggleFollowingProgress:state.usersPage.toggleFollowingProgress,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFatching:(isFatching) => {
            dispatch(toggleIsFatchingAC(isFatching))
        }
    }
}
*/

export default connect ( mapStateToProps,
     {follow, unfollow, 
     setCurrentPage, getUsers,
       toggleFollowingProgress
    })(UsersContainer);

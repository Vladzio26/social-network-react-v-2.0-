import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "./../../assets/user.png";



class Users extends React.Component {
    
    
    componentDidMount() {
        
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response =>{
            this.props.setUsers(response.data.items);
             this.props.setTotalUsersCount(response.data.totalCount);   
            
        });

    }

    onPageChange =(pageNumber) => {
        
        this.props.setCurrentPage (pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response=>{
            this.props.setUsers(response.data.items);
        })

    }



    render () {


        let pageCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize)/10;

        let pages = [];
        for(let i =1; i<=pageCount; i++){
            pages.push(i);
        }
        
        return <div>
        <div className={s.paginator}>
            <p></p>
            {pages.map(p => {
                return <span className={this.props.currentPage === p && s.selectedPage || s.page}
                onClick ={(e) => {this.onPageChange(p); }}>{p}</span>
            })}
            <p></p>
        </div>
        <hr/>
        {
        this.props.users.map( u => <div key={u.id}>
        
        <div className = {s.follow}>
            <img className={s.userPhoto} src = { u.photos.small != null ? u.photos.small : userPhoto } />
            {u.followed ?
            <button onClick = {()=>{this.props.follow(u.id)}}>  Follow</button>:
            <button onClick = {()=>{this.props.unfollow(u.id)}}>Unfollow</button>
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
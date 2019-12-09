import React from "react";
import { StreamApp, StatusUpdateForm, FlatFeed, NotificationDropdown,Activity,LikeButton,CommentField,CommentList} from 'react-activity-feed';
import s from "../Feeds.module.css";
import 'react-activity-feed/dist/index.css';
import {Route} from 'react-router-dom';



class Feedd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newArticless: []
        }
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?q=apple&from=2019-11-23&to=2019-11-23&sortBy=popularity&apiKey=a286ee8ecc784ffeaa3526ae057a73a5")
        .then((response)=>{
            return response.json();
        })
        .then((myJson)=>{
            console.log(myJson)
            this.setState({
                newArticless:myJson.newArticless
            });
        });
    }
    render(){
        console.log(this.state)
        return(
     <div>
           
    </div>
)
}}

export default Feedd;
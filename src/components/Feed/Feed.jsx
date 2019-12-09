import React from "react";
import s from "./Feeds.module.css";
import 'react-activity-feed/dist/index.css';
import {Route} from 'react-router-dom';
import Feed_2 from "./Feed_2";
import {NavLink} from 'react-router-dom';


class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            articless: []
        }
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a286ee8ecc784ffeaa3526ae057a73a5")
        .then((response)=>{
            return response.json();
        })
        .then((myJson)=>{
          
            this.setState({
                articles:myJson.articles
            });
        });

    }
    render(){
        console.log(this.state)
        return(
    <div>
            
            {this.state.articles.map((item, index)=>{
                return(
                    <div className={s.article} augmented-ui="tl-rect br-rect exe">
                        <h3>{item.title}</h3>
                        <img src={item.urlToImage}/>
                        <div><p className={s.description}>{item.description}</p><a href={item.url} className={s.seeMore} ><button class={s.example_c}>See more</button></a></div>
                        <div > </div>
                        <span>Published by:</span><p className={s.author}>{item.author}</p>
                        <p className={s.publishedAt}>{item.publishedAt}</p>
                      
                    </div>
                )
            })}
    </div>
)
}}

export default Feed;
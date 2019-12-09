import React from "react";
import s from "./Feeds.module.css";
import 'react-activity-feed/dist/index.css';
import {Route} from 'react-router-dom';
import Feed1 from "./CatalogFeeds/Feedd";
import {NavLink} from 'react-router-dom';


class Feed_2 extends React.Component {
  
  
    render(){
        console.log(this.state)
        return(
    <div>
          {this.props.articless.map((item, index)=>{
                return(
                    <div className={s.article}>
                        <h3>{item.title}</h3>
                        <img src={item.urlToImage}/>
                        <div><p>{item.description}</p><a href={item.url} className={s.seeMore}>See more</a></div>
                        <p className={s.author}>{item.author}</p>
                        <p>{item.publishedAt}</p>
                      
                    </div>
                )
            })}
    </div>
)
}}

export default Feed_2;
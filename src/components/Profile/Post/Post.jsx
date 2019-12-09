import React from 'react';
import s from './Post.module.css';




const Post = (props) => {

    return (
    <div>
        <div>
            <ul className={s.post}>
                <li><img src ="https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg" />{ props.message }</li>
                <div>
                    <span  className= {s.like}>Like✌</span>
                    <span className= {s.likecount}>{props.like}</span>
                </div>
            </ul>
        </div>
    </div>
    )
}
export default Post;
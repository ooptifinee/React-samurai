import React from "react";
import Prof from './Post.module.css';
// import ImageLink from "./ImageLink";

const Post = (props) => {
    return (
        <div className={Prof.content}>
            <div className={Prof.item}>
                <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt=""/>
                <p>
                    {props.massage}
                </p>
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
import React from "react";
import Prof from './MyPosts.module.css';
import ImageLink from "./ImageLink";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={Prof.content}>
        <div>
            <div>ava + description</div>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={Prof.userPost}>
            <Post massage='Hi, how are you ?'/>
            <Post massage="It's my first post"/>
        </div>
    </div>
}

export default MyPosts;
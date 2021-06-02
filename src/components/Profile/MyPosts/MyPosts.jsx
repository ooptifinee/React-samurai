import React from "react";
import Prof from './MyPosts.module.css';
import ImageLink from "./ImageLink";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {message: 'Hi, how are you ?', likesCount: '12'},
        {message: 'It\'s my first post', likesCount: '10'}
    ]

    return <div className={Prof.content}>
        <div className={Prof.windowEnter}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea> </textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={Prof.userPost}>
            <Post massage={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post massage={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
    </div>
}

export default MyPosts;
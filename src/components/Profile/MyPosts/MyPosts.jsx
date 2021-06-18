import React from "react";
import Prof from './MyPosts.module.css';
import ImageLink from "./ImageLink";
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement = props.posts.map( p => <Post massage={p.message} likesCount={p.likesCount} />)


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
            {postsElement}
        </div>
    </div>
}

export default MyPosts;
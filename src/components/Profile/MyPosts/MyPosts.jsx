import React from "react";
import Prof from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElement = props.profilePage.postData.map(p => <Post massage={p.message}
                                                     likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }


    return <div className={Prof.content}>
        <div className={Prof.windowEnter}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostChange}/>
                </div>
                <button onClick={addPost}>Add Post</button>
                {/*<button></button>*/}
            </div>
        </div>
        <div className={Prof.userPost}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;
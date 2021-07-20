import React from "react";
import Prof from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postData.map( p => <Post massage={p.message} likesCount={p.likesCount} />)


    let userText = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let updateUserText = () => {
        let text = userText.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }


    return <div className={Prof.content}>
        <div className={Prof.windowEnter}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={updateUserText} ref={userText} value={props.newPostChange}/>
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
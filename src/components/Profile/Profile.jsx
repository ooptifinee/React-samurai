import React from "react";
import ProStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ImageLink from "./MyPosts/ImageLink";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ImageLink/>
                <MyPosts postData={ props.postData }
                         newPostChange={props.newPostChange}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile;
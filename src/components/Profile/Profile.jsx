import React from "react";
import ProStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ImageLink from "./MyPosts/ImageLink";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ImageLink/>
                <MyPosts posts={ props.posts } />
            </div>
        </div>
    )
}

export default Profile;
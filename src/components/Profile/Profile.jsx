import React from "react";
import ProStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ImageLink from "./MyPosts/ImageLink";

const Profile = () => {
    return (
        <div className={ProStyle.content}>
            <div>
                <ImageLink/>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ImageLink from "./MyPosts/ImageLink";

const Profile = (props) => {
    return (
            <div>
                <ImageLink/>
                <MyPosts profilePage={props.profilePage}
                         dispatch={props.dispatch}/>
            </div>
    )
}

export default Profile;
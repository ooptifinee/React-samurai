import React from "react";
import Prof from "./MyPosts.module.css";

const ImageLink = () => {
    return (
        <div>
        <div className={Prof.background}> <img src="https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" alt="img"/>
        </div>

    <div className={Prof.YodaDiv}><img className={Prof.yoda} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="img"/></div>
        </div>
    )
}

export default ImageLink;
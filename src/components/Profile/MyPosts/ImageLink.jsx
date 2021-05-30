import React from "react";
import Prof from "./MyPosts.module.css";

const ImageLink = () => {
    return (
        <div>
        <div className={Prof.background}> <img src="https://images.wallpaperscraft.ru/image/holmy_derevia_priroda_212331_1920x1080.jpg" alt="img"/>
        </div>

    <div className={Prof.YodaDiv}><img className={Prof.yoda} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="img"/></div>
        </div>
    )
}

export default ImageLink;
import React from "react";

const VideoContext = React.createContext({
    handleChangeText2: (e)=> {},
    handleSearchSubmit2: (e)=>{},
    handleVideoClick:(e)=>{}
});

export default VideoContext;

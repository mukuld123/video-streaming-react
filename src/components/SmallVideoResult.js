import React, { useContext } from 'react'
import VideoContext from './VideoContext';

function SmallVideoResult(props) {

    const {handleChangeText,handleSearchSubmit, handleVideoClick} = useContext(VideoContext)
    const { thumbnail, 
            title, 
            videoDetails, 
            videosInfo, 
            searchText
        } = props
            
    return (
            <div class="row" onClick={()=>handleVideoClick(videoDetails)}>
            
                <div class="col-12 mt-3">
                    <div class="card">
                        <div class="card-horizontal">
                            <div class="img-square-wrapper">
                                <img class="" src={thumbnail} alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h6 class="card-title">{title}</h6>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SmallVideoResult
import React from 'react'
import { useNavigate } from 'react-router-dom';
function SmallVideoResult(props) {
    const { thumbnail, 
            title, 
            videoDetails, 
            videosInfo, 
            searchText,
            handleChangeText,
            handleSearchSubmit } = props
            // if we remove handleChangeText, handleSearchSubmit it works fine
    console.log(props)
    const navigate = useNavigate();
    function onSidebarVideoClick() {
        navigate('/videopage', {
            state: {
                videosInfo: videosInfo,
                selectedVideoInfo: videoDetails,
                searchText: searchText,
                handleChangeText: handleChangeText,
                handleSearchSubmit: handleSearchSubmit
            }
        })
        console.log('hey')
    }
    return (
        <div class="row" onClick={onSidebarVideoClick}>
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
import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import Header from './Header'
import SmallVideoResult from './SmallVideoResult';



function VideoPage() {

    const location = useLocation()
    console.log(location)
    const {videosInfo,
        selectedVideoInfo,
        searchText,
        handleChangeText,
        handleSearchSubmit  // if we remove handleChangeText and handleSearchSubmit, it works.
    } = location.state;
    let videoId = (selectedVideoInfo!==undefined)? selectedVideoInfo.id.videoId:""
    console.log((typeof (videosInfo)))
    let embedUrl = `https://www.youtube.com/embed/${videoId}`
    let videoTitle = (selectedVideoInfo!==undefined)?selectedVideoInfo.snippet.title:""
    const [videoDescription, setVideoDescription] = useState('videoDescription')
    let itemsList = (videosInfo!==undefined)?videosInfo.items:[]
    const [videoStats, setVideoStats] = useState({
        "viewCount": "viewCount",
        "likeCount": "likeCount",
        "favoriteCount": "favoriteCount",
        "commentCount": "commentCount"
    })
    const API_KEY = 'key'
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&id=${videoId}`)
        .then(res=> res.json())
        .then(data=>{
            setVideoStats(data.items[0].statistics)
            setVideoDescription(data.items[0].snippet.description)
            console.log(data)
        })
    }, [videoId])
    return (
        <>           
         <Header searchText={searchText} handleChangeText={handleChangeText} handleSearchSubmit={handleSearchSubmit} />
         {/* <Header searchText={searchText}  /> */}

        <div>
            <div class="wrapper">
                <div class="main-wrapper">
                    <div class="left"></div>
                    <main>
                        <div class="main__video">
                            <div class="main__video-container">
                                <iframe width="560" height="315" src={embedUrl} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                            </div>
                            <div class="main__description">
                                <h4>{videoTitle}</h4>
                                <p>{videoStats.viewCount} views</p>

                            </div>
                            <div class="main__sub-description">
                                <span>{videoDescription}</span>
                            </div>

                        </div>
                        <aside class="aside">
                            <div class="aside__top-container">
                                <p>Up next</p>
                            </div>
                            <div class="container-fluid">
                                {
                                    itemsList.map((video) => (
                                        (selectedVideoInfo.id.videoId !== video.id.videoId) ?   
                                            <SmallVideoResult thumbnail={video.snippet.thumbnails.default.url} title={video.snippet.title} videoDetails={video} videosInfo={videosInfo} searchText={searchText} handleChangeText={handleChangeText} handleSearchSubmit={handleSearchSubmit} />:<></>
                                    ))
                                }

                            </div>

                        </aside>


                    </main>
                </div>
            </div>
        </div >

        </>
    )
}

export default VideoPage

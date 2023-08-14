import React from 'react'
import '../App.css'
function OneResult({details, handleVideoClick}) {
  let imgurl = details.snippet.thumbnails.default.url
  let video_title = details.snippet.title
  let channel_name = details.snippet.channelTitle
  
  return (
    <div className='container' onClick={()=>{handleVideoClick(details)}} >
        <div class="card">
          <div class="row">
            <div class="col-sm-4 mb-3">
                <div class="card-body">
                  <img src={imgurl} width="100%" height="100%" alt="" />
                </div>
              
            </div>
            <div class="col-sm-8">
              <h2>{video_title}</h2>
              <h5>{channel_name}</h5>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default OneResult
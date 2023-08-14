import React, {useState} from 'react'
import OneResult from './OneResult'

function AllResults({videosInfo, handleVideoClick}) {
  return (
    <div>
        {
          (Object.keys(videosInfo).length != 0)
          ? videosInfo.items.map((item)=>(
              <OneResult details={item} handleVideoClick={handleVideoClick}  />
          ))
          : ""
        }
    </div>
  )
}

export default AllResults
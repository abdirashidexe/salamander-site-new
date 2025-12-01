"use client"

import React from "react"

export default function VideosApi() {

    const [thumbnail, setVideos] = React.useState([])
    fetch("http://localhost:3000/api/thumbnail/ball.mp4")
        .then(res => res)
        .then(data => {
            setVideos(data.thumbnail)          
        }, [])
        
        console.log("Fetching WORKED!")
    return (
        <div className="thumbnail-testing">
          <img src={thumbnail}></img>
      </div>
    );

}

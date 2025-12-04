"use client"

import React from "react"
import Image from "next/image";

export default function VideosApi() {

    const [videos, setVideos] = React.useState([])

    // 1. Fetch the list of video names
    React.useEffect(() => {
      fetch("http://localhost:3000/api/videos")
        .then((res) => res.json())
        .then((data) => {
          setVideos(data.videos);
        })
        .catch(err => console.error("Error fetching videos:", err));
    }, []);
        
    console.log("Fetching WORKED!")

    return (
      <div id="video-boxes">

        {/* 2. Loop through the videos array & make the url link*/}
        {videos.map(file => {
          const thumbnailUrl = `http://localhost:3000/api/thumbnail/${file}`;
          
          return (
            <form key={file} action="/processingApi" method="GET" className="video-box">
              <div key={file} className="video-box">
                <Image src={thumbnailUrl} alt={`Image of ${file}`} width={400} height={200} unoptimized={true} />
                <p>{file}</p>
                <button type="submit" name="video" value={file} >Choose Video</button>
              </div>
            </form>
          );
        })}
              </div>
    );

}

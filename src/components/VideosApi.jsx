"use client"

import React from "react"
import Link from "next/link";
import Image from "next/image";
import salamanderLogo from "../public/bestSalamanderImage.png";

export default function VideosApi() {

    const [videos, setVideos] = React.useState([])
    fetch("http://localhost:3000/api/videos")
        .then(res => res.json())
        .then(data => {
            setVideos(data.videos)          
        }, [])
        
        console.log("Fetching WORKED!")
    return (
      <>
        <div id="video-boxes">
          {videos.map(file => (
            <div key={file} className="video-box">
              <Image src="/images/placeholder-box.png" alt="placeholder" width={400} height={200}/>
              <p>{file}</p>
              <button>Choose Video</button>
            </div>
          ))}
      </div>
        </>
    );

}

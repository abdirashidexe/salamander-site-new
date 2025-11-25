"use client"

import Image from "next/image";
import React from "react"

export default function VideoPage() {

  const [videos, setVideos] = React.useState(null)
  console.log("hi")
  fetch("http://localhost:3000/api/videos")
      .then(res => res.json())
      .then(data => console.log(data))
      console.log("Fetching WORKED!")
  return (
      <div>
          <pre>{JSON.stringify(videos)}</pre>
      </div>
  )

  return (
    <div id="video-boxes">
      <div className="video-box">
        <Image src="/images/placeholder-box.png" alt="placeholder" width={400} height={200}/>
        <button>Choose Video</button>
      </div>
      
      <div className="video-box">
        <Image src="/images/placeholder-box.png" alt="placeholder" width={400} height={200}/>
        <button>Choose Video</button>
      </div>

      <div className="video-box">
        <Image src="/images/placeholder-box.png" alt="placeholder" width={400} height={200}/>
        <button>Choose Video</button>
      </div>
    </div>
  );
}

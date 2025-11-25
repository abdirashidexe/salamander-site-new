"use client"

import React from "react"

export default function VideosApi() {

    const [videos, setVideos] = React.useState(null)
    fetch("http://localhost:3000/api/videos")
        .then(res => res.json())
        .then(data => console.log(data))
        console.log("Fetching WORKED!")
    return (
        <div>
            <p>{JSON.stringify(videos)}</p>
        </div>
    )
}

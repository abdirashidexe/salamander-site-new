import React from "react"

export default function App(props) {
    const [videos, setVideos] = React.useState(null)
    fetch("http://localhost:3000/api/videos")
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <div>
            <pre>{JSON.stringify(videos, null, 2)}</pre>
        </div>
    )
}
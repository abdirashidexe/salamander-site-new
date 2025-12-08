"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image"
import loading from "./../../public/loading.gif"


export default function VideosApi() {

    //Getting video picked from the user
    const params = useSearchParams();
    const video = params.get("video");

    //react state for color and threshold 
  const [color, setColor] = React.useState("#000000");
  const [threshold, setThreshold] = React.useState(50); 
  const [status, setStatus] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false)


  //targeting the html element and running this function to keep track of changes of the threshold
  const handleChange = (event) => {
    setThreshold(event.target.value);
  };

  //testing if it outputs correct values
  function handleColorClick() {
    console.log("Selected color:", color);
  }

    //testing if it outputs correct values
  function handleThresholdClick() {
    console.log("Threshold:", threshold);
  }

  async function handleProcessing() {

    setIsLoading(true);

    //putting the url inside a variable to take out the # because react hates those 
    const  processUrl = `http://localhost:3000/api/process/${video}?targetColor=${color}&threshold=${threshold}`;
    const trueUrl = processUrl.replace(/[#]/g, "");
  
    //Posting a fetch for the jobId for the user that waits for the server
    const res = await fetch(trueUrl, { method: "POST" });
    const data = await res.json();

    //jobId exists?
    console.log("Job ID:", data.jobId);   

    // Calling the status function to get the csv
    statusProcessing(data.jobId);
  }

  async function statusProcessing(jobId) {
    //infinite loop that will constantly be checking what the status of the data is 
    while(true)   
    {
      //a fetch that waits for the server 
        const res = await fetch(`http://localhost:3000/api/process/${jobId}/status`)    
        const data = await res.json();

        console.log("Status:", data);

        if (data.status === "done") {
        console.log("Processing complete:", data.result);
        setStatus(data.result);

        // Redirect user to CSV page with query param
        window.location.href = `/csv?file=${encodeURIComponent(data.result)}`;

        break;
    }

        if (data.status === "error") {
            console.error("Error:", data.error);
            setIsLoading(false);
            break;    //getting out of the loop when it breaks 
        }
        // Having the frontend wait 10 seconds before making another request 
        await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }

  return (
    <main>

        {video 
        ? <h2>Processing: {video}</h2> 
        : <h2>Please enter a video first: <Link href="/video" className="headButton">Click here</Link></h2>
        }

        {/* {<h2>Data: {status}</h2>} */}
                {isLoading && (<Image 
                    src={loading} 
                    width={100}
                    height={75}
                    alt="Loading gif"
                />)}

      <div id="main-boxes">
        
        {/* COLOR BOX */}
        <div className="box">
          <h3>Target Color</h3>
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button onClick={handleColorClick}>Set Color</button>
        </div>

        <div className="box">
          <h3>Process</h3>
          <button onClick={handleProcessing}>Get Status</button>
        </div>

        {/* THRESHOLD BOX */}
        <div className="box">
          <h3>Threshold {threshold}</h3>
          <input type="range"
            min="0"
            max="100"
            value={threshold}
            onChange={handleChange}
          />
          <button onClick={handleThresholdClick}>Set Threshold</button>
        </div>
      </div>
    </main>
  );
}

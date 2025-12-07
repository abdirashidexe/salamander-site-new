"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function VideosApi() {

    //Getting video picked from the user
    const params = useSearchParams();
    const video = params.get("video");

    //react state for color and threshold 
  const [color, setColor] = React.useState("#000000");
  const [threshold, setThreshold] = React.useState(50); 

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
    //putting the url inside a variable to take out the # because react hates those 
    const  processUrl = `http://localhost:3000/api/process/${video}?targetColor=${color}&threshold=${threshold}`;
    const trueUrl = processUrl.replace(/[#]/g, "");
  
    //Posting to get the jobId for the user
    const res = await fetch(trueUrl, { method: "POST" });
    const data = await res.json();

    console.log("Job ID:", data.jobId);

    // 2 — Begin polling for job status
    statusProcessing(data.jobId);
    
  }

  async function statusProcessing(jobId) {
    const res = await fetch(`http://localhost:3000/api/process/${jobId}/status`)
    const data = await res.json();

    console.log("Status:", data);

    if (data.status === "done") {
        console.log("Processing complete:", data.result);
  }

  if (data.status === "error") {
    console.error("Error:", data.error);
  }
  }
  return (
    <main>
        
      <h2>Processing API Page</h2>
      <h2>Processing: {video}</h2>

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
          <progress value={30} max={100}></progress>
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

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

  function handleProcessing() {
    //putting the url inside a variable to take out the # because react hates those 
    const processUrl = `http://localhost:3000/api/process/${video}?targetColor=${color}&threshold=${threshold}`;
    const trueUrl = processUrl.replace(/[#]/g, "");
  
    //Posting to get the jobId for the user
    fetch(trueUrl, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Job ID:", data.jobId);

            //Using the jobId to get the status of the data
            return fetch(`http://localhost:3000/api/process/${data.jobId}/status`);

      })
      .then((res) => res.json())
      .then((status) => {
        console.log("Status:", status);    
      })
      .catch((err) => console.error("Error:", err));
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

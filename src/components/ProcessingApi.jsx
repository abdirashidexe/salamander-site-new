"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function VideosApi() {

    const params = useSearchParams();
    const video = params.get("video");

  const [color, setColor] = React.useState("#000000");
  const [threshold, setThreshold] = React.useState("");

  function handleColorClick() {
    console.log("Selected color:", color);
  }

  function handleThresholdClick() {
    console.log("Threshold:", threshold);
  }

  function handleProcessing() {
    const processUrl = `http://localhost:3000/api/process/${video}?targetColor=${color}&threshold=${threshold}`;
    const trueUrl = processUrl.replace(/[#]/g, "");
  
    fetch(trueUrl, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Job ID:", data.jobId);
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
          <h3>Threshold</h3>
          <input 
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
          />
          <button onClick={handleThresholdClick}>Set Threshold</button>
        </div>
      </div>
    </main>
  );
}

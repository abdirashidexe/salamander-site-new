"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function VideosApi() {
    const [jobid, setJobid] = React.useState(null);

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
        setJobid(data.jobId);
        console.log(data.jobId)
      })
      .catch(err => console.error("Error:", err));
  
    console.log(`Processing: ${video}, color: ${color}, threshold: ${threshold}, jobid: ${jobid}`);
  }

  React.useEffect(() => {
    if (jobid) {
        console.log("Job ID ready for use:", jobid);
        // You can call another API to poll job status here
    }
}, [jobid]);

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

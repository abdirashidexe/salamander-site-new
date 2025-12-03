"use client";

import React from "react";

export default function VideosApi() {

  const [color, setColor] = React.useState("#000000");
  const [threshold, setThreshold] = React.useState("");

  function handleColorClick() {
    console.log("Selected color:", color);
  }

  function handleThresholdClick() {
    console.log("Threshold:", threshold);
  }

  return (
    <main>
      <h2>Processing API Page</h2>

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

"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import NextImage from "next/image"
import loading from "./../../public/loading.gif"
import placeholderImg from "./../../public/placeholder-box.png"



export default function VideosApi() {

  //Getting video picked from the user
  const params = useSearchParams();
  const video = params.get("video");

  //react state for color and threshold 
  const [color, setColor] = React.useState("#000000");
  const [threshold, setThreshold] = React.useState(50);
  const [status, setStatus] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false)

  //ability to handle canvas element
  const binCanvasRef = useRef(null);

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

  //function to convert hex to rgb values
  function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function applyBinarization(ctx, img) {
    ctx.drawImage(img, 0, 0);   //drawing the thumbnail and setting coordinates of 0
    
    const { width, height } = ctx.canvas;   //getting the constants of width and height from the canvas

    const imageData = ctx.getImageData(0, 0, width, height);  //applying the height, width and coordinates to the image data

    const pixels = imageData.data;    //getting the pixel data from the image

    const target = hexToRgb(color);  //converting the hex to rgb values to get the target color

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      const distance = Math.sqrt(   //Euclidean color distance between the pixel color and the target color
        Math.pow(r - target.r, 2) +
        Math.pow(g - target.g, 2) +
        Math.pow(b - target.b, 2)
      );
        const value = distance <= threshold ? 255 : 0;  //comparing distance to threshold to determine black or white

        //setting the pixel to black or white based on the value
        pixels[index] = value; 
        pixels[index + 1] = value; 
        pixels[index + 2] = value;
    }
    ctx.putImageData(imageData, 0, 0);  //putting the modified image data back into the canvas  
}

//useEffect to monitor changes in video, color, or threshold
useEffect(() => {   
  if (!video) return; 

  //grabbing the canvas and content 
  const canvas = binCanvasRef.current;
  const ctx = canvas.getContext("2d");

  //creating a new image object to load the as a binarized version
  const img = new Image();
  img.src = `http://localhost:3000/api/thumbnail/${video}`;

  //runs the updated image when it's finished loading 
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    applyBinarization(ctx, img);
  };
}, [video, color, threshold]);


  async function handleProcessing() {

    setIsLoading(true);

    //putting the url inside a variable to take out the # because react hates those 
    const processUrl = `http://localhost:3000/api/process/${video}?targetColor=${color}&threshold=${threshold}`;
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
    while (true) {
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

  const thumbnailUrl = `http://localhost:3000/api/thumbnail/${video}`;

  return (
    <main>

      {video
        ? <h2>Selected: {video}</h2>
        : <h2>Please enter a video first: <Link href="/video" className="headButton">Click here</Link></h2>
      }

      {/* {<h2>Data: {status}</h2>} */}
      {isLoading && (<Image
        src={loading}
        width={100}
        height={75}
        alt="Loading gif"
      />)}

      {/* <div id="main-boxes"> */}
      <div id="settings-part-div">
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

      <div id="binarizer-part-div">
        <div className="video-box">
          <NextImage src={thumbnailUrl} alt={video ? `Image of ${video}` : `Thumbnail unavailable: No video was selected.`} width={300} height={400} unoptimized={true} />
          <p>Original</p>
        </div>

        <div className="video-box">
            <canvas ref={binCanvasRef} width={400} height={200} />
          <p>Binarized</p>
        </div>
      </div>

      <div id="processing-btn-div">
        {/* <h3>Process</h3> */}
        <button onClick={handleProcessing}>Start Processing</button>
      </div>

    </main>
  );
}

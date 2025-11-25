import Image from "next/image";

export default function VideoPage() {
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

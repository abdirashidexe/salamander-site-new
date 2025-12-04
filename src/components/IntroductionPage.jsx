import Link from "next/link";
import Image from "next/image";
import salamanderLogo from "../public/bestSalamanderImage.png";

export default function Introduction() {
    return (
      <main>
        <h2>Welcome to the Salamander Site</h2>
        <h3>Either choose to enter your own video or choose an existing video</h3>
        <br></br>
        <form>
          <label className="introLabel"> Please enter an mp4 video: 
            <input 
              type="text" 
              className="introInput" 
              placeholder="example.mp4"
            />
          </label>
          <Link href="/video" className="headButton">Submit</Link>
        </form>
        <br></br><br></br>
        <h3>Existing Video</h3>
        <Link href="/video" className="headButton">Click here</Link>
        <br></br>
        <br></br><br></br>
      </main>
    );
  }
  
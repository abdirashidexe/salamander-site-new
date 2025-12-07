import Link from "next/link";
import Image from "next/image";
import salamanderLogo from "../public/bestSalamanderImage.png";

export default function Introduction() {
    return (
      <main>
        <h2>Welcome to the Salamander Site</h2>
        <h3>Please click the button to select a videoto process</h3>
        <h3>Existing Video</h3>
        <Link href="/video" className="headButton">Click here</Link>
        <br></br>
        <br></br><br></br>
      </main>
    );
  }
  
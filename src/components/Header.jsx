import Link from "next/link";
import Image from "next/image";
import salamanderLogo from "../public/bestSalamanderImage.png";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Salamander Site</h1>
          <nav>
            <div className="nav-container">
              <Link href="/" className="headButton">Home</Link>
              <Link href="/video" className="headButton">Video</Link>
              <Link href="/csv" className="headButton">CSV</Link>
            </div>
            <Image 
              className="header-logo"
              src={salamanderLogo} 
              width={200}
              height={150}
              alt="Logo"
            />
          </nav>
      </div>
    </header>
  );
}

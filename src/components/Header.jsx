import Link from "next/link";
import Image from "next/image";
import salamanderLogo from "../public/bestSalamanderImage.png";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Salamander Site</h1>
        <div className="nav-container">
          <Link href="/" className="headButton">Processor</Link>
          <Link href="/video" className="headButton">Video</Link>
          <Link href="/csv" className="headButton">CSV</Link>
          <Link href="/introduction" className="headButton">Introduction</Link>
          <Link href="/authors" className="headButton">Authors</Link>
        </div>
        <Image 
          className="header-logo"
          src={salamanderLogo} 
          width={200}
          height={150}
          alt="Logo"
        />
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import salamanderLogo from "../public/bestSalamanderImage.png";

export default function Header() {
  return (
    <header>
      <div className="header-container"> 
        <div className="header-brand-logo">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image 
                    className="header-logo"
                    src={salamanderLogo} 
                    width={200}
                    height={150}
                    alt="Salamander Site Logo"
                />
                <h1>Salamander Site</h1>
            </Link>
        </div>

        <div className="nav-container">
          <Link href="/introduction" className="headButton">Introduction</Link>
          <Link href="/video" className="headButton">Video</Link>
          <Link href="/processingApi" className="headButton">Processor</Link>
          <Link href="/csv" className="headButton">CSV</Link>
          <Link href="/authors" className="headButton">Authors</Link>
        </div>
        
      </div>
    </header>
  );
}
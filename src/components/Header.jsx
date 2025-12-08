"use client";
import Link from "next/link";
import Image from "next/image";
import salamanderLogo from "../public/bestSalamanderImage.png";
import React, { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      // If turning ON, add the class
      document.body.classList.add('dark-mode');
    } else {
      // If turning OFF, remove the class
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <header>
      <div className="header-container"> 
        
        <div className="header-brand-logo">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image 
                    className="header-logo"
                    src={salamanderLogo} 
                    width={100}
                    height={75}
                    alt="Salamander Selector Logo"
                />
                <h1>Salamander Selector</h1>
            </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem'}}> 
            <div className="nav-container">
              <Link href="/introduction" className="headButton">Intro</Link>
              <Link href="/video" className="headButton">Video</Link>
              <Link href="/processingApi" className="headButton">Processor</Link>
              <Link href="/csv" className="headButton">CSV</Link>
              <Link href="/authors" className="headButton">Authors</Link>
            </div>

            <button 
                onClick={toggleDarkMode} 
                className="headButton"
            >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button> 
        </div>
      </div>
    </header>
  );
}
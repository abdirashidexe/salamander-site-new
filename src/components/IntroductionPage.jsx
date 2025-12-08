import Link from "next/link";

export default function Introduction() {
    return (
      <main>
        <h2>Welcome to Salamander Selector</h2>
        <h3>Please click the button below to select a video to process.</h3>
        <Link href="/video" className="headButton">👉 Take Me to Existing Videos 👈</Link>
      </main>
    );
  }
  
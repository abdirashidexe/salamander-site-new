import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/video">Video</Link>
        <Link href="/csv">CSV</Link>
      </nav>
    </header>
  );
}

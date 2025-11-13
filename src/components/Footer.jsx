import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav>
        <Link href="/Authors">Authors</Link>
      </nav>
      <p>© 2025 My App</p>
    </footer>
  );
}
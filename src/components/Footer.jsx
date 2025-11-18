import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <Link href="/authors">Authors</Link>
      <Link href="/contact">Contact</Link>
      <p>© 2025 My App</p>
    </footer>
  );
}
